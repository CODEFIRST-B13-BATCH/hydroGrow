import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { AlertNotificationComponent } from './components/alert-notification/alert-notification.component';
import { LogMaintenanceTaskComponent } from './components/log-maintenance-task/log-maintenance-task.component';
import { DailyTasksComponent } from './components/daily-tasks/daily-tasks.component';
import { SensorComponent } from './sensor/sensor.component';
// import { DailyTasksComponent } from './components/daily-tasks/daily-tasks.component'; // Removed
// import { SuperAdminDashboardComponent } from "./components/super-admin-dashboard/super-admin-dashboard.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CommonModule, MainDashboardComponent, AlertNotificationComponent, LoginComponent, RegisterComponent,DailyTasksComponent,SensorComponent,LogMaintenanceTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hydrogrow';


  showNavbar = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Hide navbar on login & register
        console.log(event.url);
        if (event.url === '/' || event.url === '/register') {
          this.showNavbar = false;
        } else {
          this.showNavbar = true;
        }
      }
    });
  }

}
