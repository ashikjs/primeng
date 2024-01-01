import { Chips } from 'src/app/components/chips/chips';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('Chips', () => {
    let component: Chips;
    let fixture: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Chips]
        });

        fixture = TestBed.createComponent(Chips);
        component = fixture.componentInstance;
    });

    it('should check if isMaxedOut method returns true when max value is equal to the length of value', () => {
        component.max = 3;
        component.value = [1, 2, 3];
        expect(component.isMaxedOut).toEqual(true);
    });

    it('should check if isMaxedOut method returns false when max value is not equal to the length of value', () => {
        component.max = 3;
        component.value = [1, 2];
        expect(component.isMaxedOut).toEqual(false);
    });

    it('should check if isMaxedOut method returns false when max is undefined', () => {
        component.value = [1, 2];
        expect(!!component.isMaxedOut).toEqual(false);
    });

    it('should check if isMaxedOut method returns false when value is undefined', () => {
        component.max = 3;
        expect(!!component.isMaxedOut).toEqual(false);
    });
});
