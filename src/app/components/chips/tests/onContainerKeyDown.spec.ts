// Import necessary dependencies
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Chips } from 'src/app/components/chips/chips';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Chips', () => {
  let chips: Chips;
  let fixture: ComponentFixture<Chips>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [Chips]
    });

    fixture = TestBed.createComponent(Chips);
    chips = fixture.componentInstance;
  });

  it('should call the onArrowLeftKeyOn method when the ArrowLeft key is pressed', () => {
    spyOn(chips, 'onArrowLeftKeyOn');
    let container = fixture.debugElement.query(By.css('ul')).nativeElement;

    const event = new KeyboardEvent('keydown', {
      'code': 'ArrowLeft'
    });

    container.dispatchEvent(event);
    expect(chips.onArrowLeftKeyOn).toHaveBeenCalled();
  });

  it('should call the onArrowRightKeyOn method when the ArrowRight key is pressed', () => {
    spyOn(chips, 'onArrowRightKeyOn');
    let container = fixture.debugElement.query(By.css('ul')).nativeElement;

    const event = new KeyboardEvent('keydown', {
      'code': 'ArrowRight'
    });

    container.dispatchEvent(event);
    expect(chips.onArrowRightKeyOn).toHaveBeenCalled();
  });

  it('should call the onBackspaceKeyOn method when the Backspace key is pressed', () => {
    spyOn(chips, 'onBackspaceKeyOn');
    let container = fixture.debugElement.query(By.css('ul')).nativeElement;

    const event = new KeyboardEvent('keydown', {
      'code': 'Backspace'
    });

    container.dispatchEvent(event);
    expect(chips.onBackspaceKeyOn).toHaveBeenCalled();
  });
});
