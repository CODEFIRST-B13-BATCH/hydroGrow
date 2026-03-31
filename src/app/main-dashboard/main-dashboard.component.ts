import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,  
  imports: [MatCardModule, MatButtonModule, CommonModule, MatIconModule, MatListModule, MatDividerModule],
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {
  
  boxes = [
  { 
    name: 'Total Farms', 
    count: '12',
     trend: 'trending_up',
      percentage: '+2%',
       icon: 'home',
        color: '#f3f4ed',
         iconColor: '#5d6332' 
        },
  { 
    name: 'Active Systems', 
    count: '48', 
    trend: '',
     percentage: 'Stable',
      icon: 'grid_view',
       color: '#eef2ff',
        iconColor: '#4f46e5'
       },
  { name: 'Crop Health Score',
     count: '94%',
      trend: 'arrow_upward',
       percentage: '+5%',
        icon: 'health_and_safety',
         color: '#ecfdf5',
          iconColor: '#10b981'
         }
];

tasks = [
  {
    icon: 'opacity',
    bg: '#eef3d6',
    title: 'Flush Reservoir Unit B',
    subtitle: 'Scheduled maintenance for nutrient balancing',
    day: 'TODAY',
    time: '2:00 PM'
  },
  {
    icon: 'science',
    bg: '#fff4cc',
    title: 'Calibrate pH Sensors',
    subtitle: 'Greenhouse 1 & 4 requires sensor recalibration',
    day: 'TOMORROW',
    time: '09:00 AM'
  },
  {
    icon: 'inventory_2',
    bg: '#e9edf2',
    title: 'Restock Nitrogen Mix',
    subtitle: 'Inventory low in storage room A1',
    day: 'WEDNESDAY',
    time: 'All Day'
  }
];

  insight = {
    text: 'Based on current nutrient consumption and light cycles, we predict Greenhouse 1 will reach peak harvest 4 days earlier than expected. Adjust transport logistics accordingly.',
    yieldConfidence: '98.4%'
  };

  greenhousestatus = [
    { 
      title: 'Greenhouse 1: NFT System', 
      subtitle: 'Tomatoes (Vine Varieties)', 
      temp: '24.5°C', 
      humidity: '62%', 
      status: 'NORMAL',
      sync: '2 mins ago',
      borderColor: '#80823c' 
    },
    { 
      title: 'Greenhouse 2: DWC Unit', 
      subtitle: 'Butterhead Lettuce', 
      temp: '29.2°C', 
      humidity: '45%', 
      status: 'ALERT',
      sync: 'Critical: Temp too high',
      borderColor: '#e57373' 
    },
    { 
      title: 'North Wing: AeroPonics', 
      subtitle: 'Genoses Basil', 
      temp: '21.1°C', 
      humidity: '75%', 
      status: 'NORMAL',
      sync: '12 Mints  Ago',
       borderColor: '#80823c'
    }
  ];

  onManageTasks() {
    // TODO: Replace with navigation or dialog as needed
    console.log('Manage tasks clicked');
  }

}

