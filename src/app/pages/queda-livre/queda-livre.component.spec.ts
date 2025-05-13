import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuedaLivreComponent } from './queda-livre.component';

describe('QuedaLivreComponent', () => {
  let component: QuedaLivreComponent;
  let fixture: ComponentFixture<QuedaLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuedaLivreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuedaLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
