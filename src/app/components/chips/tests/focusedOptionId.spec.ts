import { Chips } from 'src/app/components/chips/chips';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Chips', () => {
  let component: Chips;
  let fixture: ComponentFixture<Chips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chips ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chips);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test for `focusedOptionId` getter method in `Chips` class
  it('focusedOptionId should return id_chips_item_index string when focusedIndex is not null', () => {
    const index = 5;
    component.id = '1234';
    component.focusedIndex = index;
    expect(component.focusedOptionId).toBe(`${component.id}_chips_item_${index}`);
  });

  it('focusedOptionId should return null when focusedIndex is null', () => {
    component.focusedIndex = null;
    expect(component.focusedOptionId).toBeNull();
  });
});
