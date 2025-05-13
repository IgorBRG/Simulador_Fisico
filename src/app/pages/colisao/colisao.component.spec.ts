import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisaoComponent } from './colisao.component';

describe('ColisaoComponent', () => {
  let component: ColisaoComponent;
  let fixture: ComponentFixture<ColisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColisaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
