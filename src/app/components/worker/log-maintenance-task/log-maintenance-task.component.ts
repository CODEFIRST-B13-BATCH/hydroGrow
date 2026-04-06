import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-maintenance-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './log-maintenance-task.component.html',
  styleUrls: ['./log-maintenance-task.component.css']
})
export class LogMaintenanceTaskComponent {

  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      taskType: ['', Validators.required],
      location: ['', Validators.required],
      system: ['', Validators.required],

      nutrient: ['', [Validators.required, Validators.min(0)]],
      phStart: ['', [Validators.required, Validators.min(0),Validators.max(14)]],
      phEnd: ['', [Validators.required,Validators.min(0), Validators.max(14)]],
      ecLevel: ['', Validators.required],
      temperature: ['', [Validators.required, Validators.min(0), Validators.max(50)]],

      notes: ['']
    });
  }

  get form() {
    return this.taskForm.controls;
  }

  onSubmit() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }

    const formData = this.taskForm.value;

    let logs = JSON.parse(localStorage.getItem('maintenanceLogs') || '[]');

    logs.push({
      ...formData,
      images: this.images,
      date: new Date()
    });

    localStorage.setItem('maintenanceLogs', JSON.stringify(logs));

    console.log('Saved Data:', logs);

    this.taskForm.reset();

    this.images = [];
  }

  onCancel() {
    this.taskForm.reset();
  }

  images: string[] = [];

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.images.push(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(index: number) {
    this.images.splice(index, 1);
  }
}