import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhamriComponent } from './zhamri.component';

describe('ZhamriComponent', () => {
  let component: ZhamriComponent;
  let fixture: ComponentFixture<ZhamriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZhamriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZhamriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
