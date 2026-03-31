import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogMaintenanceTaskComponent } from './components/log-maintenance-task/log-maintenance-task.component';

export const routes: Routes = [
    // {
    //     path: 'superAdmindashboard',
    //     loadComponent: () =>
    //         import('../app/components/super-admin-dashboard/super-admin-dashboard.component').then(
    //             (m) => m.SuperAdminDashboardComponent,
    //         ),
    // },

    // {path:'',component:LoginComponent},
    {path:'register',component:RegisterComponent},

   {path:'',component:LogMaintenanceTaskComponent},

    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    //  {
    //     path: '',loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent)
    // },

    //  {
    //     path: 'register',loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent)
    // },

    {
        path: 'dashboard', loadComponent: () => import('../app/main-dashboard/main-dashboard.component').then((m) => m.MainDashboardComponent),
    },
    {
        path: 'crops-health', loadComponent: () => import('../app/components/crop-health/crop-health.component').then((m) => m.CropHealthComponent),
    },

    {
        path: 'main-dashboard',
        loadComponent: () => import('../app/main-dashboard/main-dashboard.component').then((m) => m.MainDashboardComponent),
    },

    {
        path: 'alerts', loadComponent: () => import('../app/components/alert-notification/alert-notification.component').then((m) => m.AlertNotificationComponent)
    },
    {
        path: 'daily-tasks', loadComponent: () => import('../app/components/daily-tasks/daily-tasks.component').then((m) => m.DailyTasksComponent)
    },
    {
        path: 'sensor', loadComponent: () => import('./sensor/sensor.component').then((m) => m.SensorComponent)
    },

    // {
    //     path: '',
    // },
    // {
    //     path: '',
    // },
    // {
    //     path: '',
    // }

];
