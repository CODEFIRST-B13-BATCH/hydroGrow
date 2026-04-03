import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-alert-notification',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressBarModule,

  ],
  templateUrl: './alert-notification.component.html',
  styleUrls: ['./alert-notification.component.css'],
})
export class AlertNotificationComponent {
  selectedSeverity = 'all';
  selectedStatus = 'Active';
  selectedPeriod = '24h';

  dataSource = [
    {
      icon: 'water_drop',
      iconClass: 'red',
      type: 'pH Imbalance (High)',
      source: 'Greenhouse 1 : NFT System A',
      severity: 'CRITICAL',
      time: 'Today, 09:42 AM',
      status: 'Active',
    },
    {
      icon: 'thermostat',
      iconClass: 'orange',
      type: 'Temperature Warning',
      source: 'Greenhouse 2 : Zone B-12',
      severity: 'WARNING',
      time: 'Today, 08:15 AM',
      status: 'Acknowledged',
    },
    {
      icon: 'build_circle',
      iconClass: 'blue',
      type: 'Scheduled Maintenance',
      source: 'Global : Cloud Hub 1',
      severity: 'INFO',
      time: 'Yesterday, 10:00 PM',
      status: 'Resolved',
    },
  ];

  displayedColumns: string[] = ['type', 'severity', 'time', 'status', 'actions'];

  notifications = [
    {
      icon: 'person',
      title: 'Manager Alex',
      action: 'marked "Water Level Low" as resolved.',
      time: '15 minutes ago',
    },
    {
      icon: 'rotate_right',
      title: 'Automatic EC Calibration',
      action: 'completed successfully for Greenhouse 1.',
      time: '2 hours ago',
    },
    {
      icon: 'settings',
      title: 'System Update v2.4.0',
      action: 'applied. Check the release notes.',
      time: '5 hours ago',
    },
  ];
 
}
  



