import { SelectModule } from '../select/select.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SelectModule ],
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;

    window.localStorage.removeItem('default-items-per-page');

    component.collection = new Array(178).fill('');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should changes items per page', () => {
    const paginateCollectionSpy = spyOn(component, 'paginateCollection');
    const info = fixture.debugElement.query(By.css('.pagination__info p')).nativeElement;

    component.changeItemsPerPage({ value: 30 });

    fixture.detectChanges();

    expect(component.itemsPerPage).toBe(30);
    expect(paginateCollectionSpy).toHaveBeenCalled();
    expect(info.innerText).toContain('1 - 30 de 178 itens');
  });

  it('should changes the page', () => {
    const paginateCollectionSpy = spyOn(component, 'paginateCollection');
    const info = fixture.debugElement.query(By.css('.pagination__info p')).nativeElement;

    component.changePage(16);

    fixture.detectChanges();

    expect(paginateCollectionSpy).toHaveBeenCalled();
    expect(info.innerText).toContain('160 - 170 de 178 itens');

    component.changePage(18);

    fixture.detectChanges();

    expect(info.innerText).toContain('180 - 178 de 178 itens');
  });

  it('shoud navigates to next page', () => {
    const paginateCollectionSpy = spyOn(component, 'paginateCollection');
    const nextPageButton = fixture.debugElement.query(By.css('.pagination__nav button:last-of-type')).nativeElement;
    const info = fixture.debugElement.query(By.css('.pagination__info p')).nativeElement;

    nextPageButton.click();

    fixture.detectChanges();

    expect(paginateCollectionSpy).toHaveBeenCalled();
    expect(info.innerText).toContain('10 - 20 de 178 itens');
    expect(component.activePage).toBe(1);
  });

  it('shoud navigates to previous page', () => {
    const paginateCollectionSpy = spyOn(component, 'paginateCollection');
    const previusPageButton = fixture.debugElement.query(By.css('.pagination__nav button:first-of-type')).nativeElement;
    const info = fixture.debugElement.query(By.css('.pagination__info p')).nativeElement;

    component.activePage = 1;

    fixture.detectChanges();

    previusPageButton.click();

    fixture.detectChanges();

    expect(paginateCollectionSpy).toHaveBeenCalled();
    expect(info.innerText).toContain('1 - 10 de 178 itens');
    expect(component.activePage).toBe(0);
  });

  it('should paginates collection', () => {
    component.$paginate.subscribe(collection => {
      expect(collection.length).toBe(10);
    });

    component.paginateCollection();
  });

  it('should not update collection', () => {
    const paginateCollectionSpy = spyOn(component, 'paginateCollection');

    component.ngOnChanges({ test: true } as any);

    expect(paginateCollectionSpy).not.toHaveBeenCalled();
  });

  it('should update collection', () => {
    const paginateCollectionSpy = spyOn(component, 'paginateCollection');

    component.ngOnChanges({ collection: [] } as any);

    expect(paginateCollectionSpy).toHaveBeenCalled();
  });

  it('should retivies items per page from user choise', () => {
    component.changeItemsPerPage({ value: 20 });

    component.ngOnChanges({ collection: [] } as any);

    expect(component.itemsPerPage).toBe(20);
  });

  it('should changes active page when change itens per page', () => {
    const changePageSpy = spyOn(component, 'changePage');

    component.activePage = 18;
    component.changeItemsPerPage({ value: 30 });

    fixture.detectChanges();

    expect(changePageSpy).toHaveBeenCalledWith(5);
  });
});
