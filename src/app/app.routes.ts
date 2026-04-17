import { Routes } from '@angular/router';

// login
import { LoginComponent } from './components/auth/login/login.component';

// admin page
import { RegisterComponent } from './components/auth/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'owner',
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/owner/main-dashboard/main-dashboard.component').then(
            (m) => m.MainDashboardComponent,
          ),
      },
      {
        path: 'alerts',
        loadComponent: () =>
          import('./components/owner/alert-notification/alert-notification.component').then(
            (m) => m.AlertNotificationComponent,
          ),
      },
      {
        path: 'crops-health',
        loadComponent: () =>
          import('../app/components/owner/crop-health/crop-health.component').then(
            (m) => m.CropHealthComponent,
          ),
      },
      {
        path: 'crops-management',
        loadComponent: () =>
          import('../app/components/owner/crop-mangement/crops.component').then(
            (m) => m.CropsComponent,
          ),
      },

      {
        path:'sensor' ,loadComponent:() => import('../app/components/owner/sensor/sensor.component').then((m) => m.SensorComponent)
      }
    ],
  },
  {
    path: 'admin',
    children: [
      {
        path: 'super-admin',
        loadComponent: () =>
          import('../app/components/admin/super-admin-dashboard/super-admin-dashboard.component').then(
            (m) => m.SuperAdminDashboardComponent,
          ),
      },
    ],
  },


  {
    path: 'worker',
    children: [
      {
        path:'daily-task',loadComponent :() => import('../app/components/worker/daily-tasks/daily-tasks.component').then((m) => m.DailyTasksComponent)
      },
      {
        path:'activitylog',loadComponent :() => import('../app/components/worker/log-maintenance-task/log-maintenance-task.component').then ((m) => m.LogMaintenanceTaskComponent)
      }
    ],
  },
];
