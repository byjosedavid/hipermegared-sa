import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaFormComponent } from './zona-form.component';

describe('ZonaFormComponent', () => {
  let component: ZonaFormComponent;
  let fixture: ComponentFixture<ZonaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZonaFormComponent]
    });
    fixture = TestBed.createComponent(ZonaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
