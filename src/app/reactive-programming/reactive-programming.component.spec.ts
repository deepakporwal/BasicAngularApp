import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveProgrammingComponent } from './reactive-programming.component';

xdescribe('ReactiveProgrammingComponent', () => {
  let component: ReactiveProgrammingComponent;
  let fixture: ComponentFixture<ReactiveProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveProgrammingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
