import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigrammeCompletComponent } from './organigramme-complet.component';

describe('OrganigrammeCompletComponent', () => {
  let component: OrganigrammeCompletComponent;
  let fixture: ComponentFixture<OrganigrammeCompletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganigrammeCompletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganigrammeCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
