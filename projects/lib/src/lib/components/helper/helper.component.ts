import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.scss']
})
export class HelperComponent {
  @Input() text: string;

  @ViewChild('button', { static: false }) buttonElement: ElementRef;
  @ViewChild('tooltip', { static: false }) tooltipElement: ElementRef;
  @ViewChild('tooltipContent', { static: false }) tooltipContentElement: ElementRef;

  public positionClassName = 'center';
  public showHelper = false;

  public onBlur(): void {
    this.showHelper = false;
  }

  public onClick($event): void {
    $event.preventDefault();
    this.showHelper = !this.showHelper;

    setTimeout(() => {
      this.setTooltipSize();
      this.setTooltipPosition();
    });
  }

  private setTooltipSize(): void {
    if (this.tooltipContentElement) {
      const textWidth = this.tooltipContentElement.nativeElement.offsetWidth;

      if (textWidth < 300) {
        this.tooltipElement.nativeElement.style.width = textWidth + 20 + 'px';
      }
    }
  }

  private setTooltipPosition(): void {
    if (this.tooltipElement) {
      let element = this.buttonElement.nativeElement;
      let offsetLeft = 0;

      const toolTipWidth = this.tooltipElement.nativeElement.clientWidth;
      const viewportSize = this.getViewPort();

      do {
        offsetLeft += element.offsetLeft || 0;
        element = element.offsetParent;
      } while (element);

      if (toolTipWidth / 2 > offsetLeft) {
        this.positionClassName = 'right';
      }

      if (toolTipWidth / 2 + offsetLeft > viewportSize.width - 20) {
        this.positionClassName = 'left';
      }
    }
  }

  public onKeyup($event): void {
    $event.preventDefault();

    if ($event.keyCode === 27) {
      this.showHelper = false;
    }
  }

  public getViewPort() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}
