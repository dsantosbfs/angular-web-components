import { BehaviorSubject } from 'rxjs';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnChanges,
  Output,
  QueryList,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  forwardRef,
  OnInit,
  NgZone,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { BaseFormComponent } from '../../shared/components/base-form.component';
import { KeyCode } from './select.types';

@Component({
  selector: 'lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }],
})
export class SelectComponent extends BaseFormComponent implements OnInit, OnChanges {

  @Input() disabled: boolean;
  @Input() data: any[];
  @Input() label: string;
  @Input() defaultValue: any;

  @Output() $onSelect = new EventEmitter<any>();

  @ViewChild('input', { static: false }) inputElement: ElementRef;
  @ViewChildren('listItem') listItemElements: QueryList<ElementRef>;

  public textValue$ = new BehaviorSubject<string>('');
  public activeIndex = -1;
  public focus = false;

  private parsedItems = [];

  constructor(
    @Inject(Renderer2) private renderer: Renderer2,
    private ngZone: NgZone
  ) {
    super();
  }

  set items(value) {
    this._setItems(value);
  }

  get items() {
    return this.parsedItems;
  }

  get activeItem() {
    return this.items[this.activeIndex];
  }

  get activeItemElement() {
    return this.listItemElements.toArray()[this.activeIndex];
  }

  get defaultSelection(): any {
    return this.items.filter(element => element.value.value === this.defaultValue)[0] || null;
  }

  get isOpen() {
    return this.focus;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data) {
      this.items = changes.data.currentValue || [];
      this.setDefaultSelected();
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (KeyCode[event.which]) {
      event.preventDefault();
      this[`_handle${KeyCode[event.which]}`](event);
    }
  }

  @HostListener('click')
  onSelectOpen() {
    this.setDefaultSelected();
  }

  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.textValue$.next(value.label);

      const collectionItem = this.items.filter(element => element.value.value === value.value);

      if (collectionItem[0]) {
        this.clearCurrentSelected();

        collectionItem[0].selected = true;
      }

    }
  }

  public setDefaultSelected() {
    if (!this.innerValue && this.defaultSelection) {
      this.defaultSelection.selected = true;
      this.textValue$.next(this.defaultSelection.label);
    }
  }

  public onBlur(): void {
    setTimeout(() => {
      this.focus = false;
    }, 150);
  }

  public onFocus(): void {
    if (this.disabled) {
      return;
    }

    this._onTouched();
    this.focus = true;
  }

  public onToggle(): void {
    if (this.focus) {
      this.renderer.selectRootElement(this.inputElement.nativeElement).blur();
      this.focus = false;

      return;
    }

    this.renderer.selectRootElement(this.inputElement.nativeElement).focus();
    this.focus = true;
  }

  public handleClick(item, index): void {
    this._setSelectedItem(item);
    this.activeIndex = index;
  }

  public handleHover(index): void {
    this.activeIndex = index;
  }

  private _updateScrollPosition(element: ElementRef): void | boolean {
    if (!element) {
      return false;
    }

    element.nativeElement.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth'
    });
  }

  private _setSelectedItem(item): void {
    this.innerValue = item.value;
    this.$onSelect.emit(item.value);
    this.setSelectedItem(item);
    this.textValue$.next(item.label);
    this.renderer.selectRootElement(this.inputElement.nativeElement).blur();
  }

  private _handleArrowDown(event): void {
    if (this.activeIndex < (this.items.length - 1)) {
      this.activeIndex += 1;
    }

    this._updateScrollPosition(this.activeItemElement);
  }

  private _handleArrowUp(event): void {
    if (this.activeIndex > 0) {
      this.activeIndex -= 1;
    }

    this._updateScrollPosition(this.activeItemElement);
  }

  private _handleEnter(event): void {
    this._setSelectedItem(this.activeItem);
  }

  private _handleEsc(event): void {
    this.renderer.selectRootElement(this.inputElement.nativeElement).blur();
  }

  public setSelectedItem(item): void {
    this.clearCurrentSelected();
    item.selected = true;
  }

  private clearCurrentSelected(): void {
    this.parsedItems.map(i => i.selected = false);
    this.activeIndex = -1;
  }

  private _setItems(value) {
    if (value.length) {
      this.parsedItems = value.map((item) => {
        return {
          label: item.label,
          selected: false,
          value: item
        };
      });
    }
  }
}
