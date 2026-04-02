import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMaintenanceTaskComponent } from './log-maintenance-task.component';

describe('LogMaintenanceTaskComponent', () => {
  let component: LogMaintenanceTaskComponent;
  let fixture: ComponentFixture<LogMaintenanceTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogMaintenanceTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogMaintenanceTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
