import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { SuperAdminDashboardComponent } from "../../components/super-admin-dashboard/super-admin-dashboard.component";
import { MatSelect, MatOption } from "@angular/material/select";
import { MainDashboardComponent } from '../../../main-dashboard/main-dashboard.component';
@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatExpansionModule,
    MatMenuModule,
    SuperAdminDashboardComponent,
    MatSelect,
    MatOption,
    MainDashboardComponent
],

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

 showCropsMenu = false;
 
 
isCollapsed=true;

  constructor(private router: Router) {}

 onCropChange(value: string) {
  if (value === 'health') {
    this.router.navigate(['/crops-health']);
  } else if (value === 'management') {
    this.router.navigate(['/crops-management']);
  }
}
toggleSidebar() {
this.isCollapsed= !this.isCollapsed;
}

}
