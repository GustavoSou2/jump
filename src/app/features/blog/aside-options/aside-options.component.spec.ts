import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideOptionsComponent } from './aside-options.component';

describe('AsideOptionsComponent', () => {
  let component: AsideOptionsComponent;
  let fixture: ComponentFixture<AsideOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
