import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Batch {
  name: string;
  batch: string;
  stage: string;
  progress: number;
  health: string;
  day: number;
  total: number;
  note: string;
  yield: string;
}

@Component({
  selector: 'app-crops',
  imports: [CommonModule, 
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatDividerModule,
    MatIconModule,
    MatChipsModule,
    MatButtonToggleModule],
  templateUrl: './crops.component.html',
  styleUrl: './crops.component.css'
})
export class CropsComponent {

displayedColumns = ['crop','growth','health','timeline','yield','action'];

dataSource = [
  {
    name: 'Genoese Basil',
    batch: 'Batch #B-2024-08',
    stage: 'Vegetative',
    progress: 65,
    health: 'Healthy',
    day: '24 / 45',
    note: 'Harvest in 21 days',
    yield: '12.5 kg'
  },
  {
      name: 'Butterhead Lettuce',
      batch: 'Batch #L-2024-12',
      stage: 'MATURE',
      progress: 92,
      health: 'Warning',
      day: '41 / 45',
      total: 45,
      note: 'Harvest Window Open',
      yield: '28.0 kg'
    },
    {
      name: 'Roma Tomatoes',
      batch: 'Batch #T-2024-05',
      stage: 'FLOWERING',
      progress: 45,
      health: 'Healthy',
      day: '35 / 80',
      total: 80,
      note: 'Harvest in 45 days',
      yield: '142.0 kg'
    }
];
  
  // displayedColumns: string[] = ['crop', 'stage', 'health', 'timeline', 'yield', 'action'];

  // dataSource: Batch[] = [
  //   {
  //     name: 'Genoese Basil',
  //     batch: 'Batch #B-2024-08',
  //     stage: 'VEGETATIVE',
  //     progress: 65,
  //     health: 'Healthy',
  //     day: 24,
  //     total: 45,
  //     note: 'Harvest in 21 days',
  //     yield: '12.5 kg'
  //   },
  //   {
  //     name: 'Butterhead Lettuce',
  //     batch: 'Batch #L-2024-12',
  //     stage: 'MATURE',
  //     progress: 92,
  //     health: 'Warning',
  //     day: 41,
  //     total: 45,
  //     note: 'Harvest Window Open',
  //     yield: '28.0 kg'
  //   },
  //   {
  //     name: 'Roma Tomatoes',
  //     batch: 'Batch #T-2024-05',
  //     stage: 'FLOWERING',
  //     progress: 45,
  //     health: 'Healthy',
  //     day: 35,
  //     total: 80,
  //     note: 'Harvest in 45 days',
  //     yield: '142.0 kg'
  //   }
  // ];
}
