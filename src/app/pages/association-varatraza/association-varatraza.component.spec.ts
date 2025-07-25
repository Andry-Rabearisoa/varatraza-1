import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationVaratrazaComponent } from './association-varatraza.component';

describe('AssociationVaratrazaComponent', () => {
  let component: AssociationVaratrazaComponent;
  let fixture: ComponentFixture<AssociationVaratrazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssociationVaratrazaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociationVaratrazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
