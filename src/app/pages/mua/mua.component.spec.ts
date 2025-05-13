import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuaComponent } from './mua.component';

describe('MuaComponent', () => {
  let component: MuaComponent;
  let fixture: ComponentFixture<MuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
