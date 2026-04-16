import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatNavList } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { NgClass } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-super-admin-dashboard',
  standalone: true,
  imports:[
    MatCardModule,
    MatButtonModule,
    MatIcon,
    MatNavList,
    MatTableModule,
    MatSelectModule,
    NgClass,
    MatSidenavModule,
    MatGridListModule,
    FormsModule
  ],
  templateUrl: './super-admin-dashboard.component.html',
  styleUrl: './super-admin-dashboard.component.css',
})
export class SuperAdminDashboardComponent implements AfterViewInit {
  @ViewChild('barChart') chartRef!: ElementRef;

  chart: any;
  selectedRange = '7'; // Tracks the dropdown state

  // Store data for both views here
  chartConfigs: any = {
    '7': {
      labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      data: [60, 45, 80, 55, 95, 70, 65],
      barThickness: 40
    },
    '30': {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [350, 420, 310, 480],
      barThickness: 60
    }
  };

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const initial = this.chartConfigs['7'];
    
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: initial.labels,
        datasets: [{
          data: initial.data,
          backgroundColor: '#7f7b2f',
          borderRadius: 6,
          barThickness: initial.barThickness,
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { color: '#888' } },
          y: { display: false, grid: { display: false } }
        }
      }
    });
  }

  // This function forces the chart to reset to whichever range is clicked
  onRangeChange(value: string) {
    const selected = this.chartConfigs[value];

    // 1. Update Labels
    this.chart.data.labels = selected.labels;
    
    // 2. Update Data points
    this.chart.data.datasets[0].data = selected.data;
    
    // 3. Update Bar Visuals
    this.chart.data.datasets[0].barThickness = selected.barThickness;

    // 4. THE MOST IMPORTANT PART: Tell Chart.js to re-render
    this.chart.update();
  }

  // --- PREVIOUS CONTENT PRESERVED ---
  displayedColumns: string[] = ['user', 'role', 'status', 'action'];
  users = [
    { initials: 'JD', name: 'Jane Doe', email: 'jane@hydofarm.com', role: 'Farm Manager', access: '3 Locations', status: 'ACTIVE' },
    { initials: 'RK', name: 'Robert King', email: 'r.king@agrotech.io', role: 'Technician', access: '12 Locations', status: 'PENDING' },
    { initials: 'SL', name: 'Sarah Lane', email: 'sarah@ecogrow.net', role: 'Analyst', access: 'Global', status: 'ACTIVE' },
  ];

addUser() {
  // Use a prompt to actually get a name from you
  const name = prompt("Enter User Name:");
  if (!name) return; // Exit if you cancel

  const newUser = {
    initials: name.substring(0, 2).toUpperCase(),
    name: name,
    email: `${name.toLowerCase().replace(' ', '.')}@hydrogrow.com`,
    role: 'Technician',
    access: '1 Location',
    status: 'ACTIVE',
  };

  // IMPORTANT: For Angular Material Table, you must replace the array 
  // reference for the table to detect the change and re-render.
  this.users = [...this.users, newUser];
  
  console.log("User Added:", newUser);
}

  alerts = [
    { icon: 'warning', title: 'Critical pH - Farm #402', desc: 'Threshold exceeded in Zone B', time: '2m ago', type: 'danger' },
    { icon: 'ac_unit', title: 'Temp Drop - Farm #112', desc: 'Heater failure in Greenhouse 4', time: '15m ago', type: 'warning' },
    { icon: 'water_drop', title: 'Low Water - Farm #88', desc: 'Reservoir level at 15%', time: '1h ago', type: 'normal' },
  ];
}