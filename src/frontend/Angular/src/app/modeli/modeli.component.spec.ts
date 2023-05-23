import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeliComponent } from './modeli.component';

describe('ModeliComponent', () => {
  let component: ModeliComponent;
  let fixture: ComponentFixture<ModeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
