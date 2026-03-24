import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import { SuperAdminDashboardComponent } from "./components/super-admin-dashboard/super-admin-dashboard.component";
 


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hydrogrow';
}
