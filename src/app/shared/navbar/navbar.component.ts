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
import { AlertNotificationComponent } from '../../components/alert-notification/alert-notification.component';
import { MainDashboardComponent } from '../../main-dashboard/main-dashboard.component';
@Component({
  selector: 'app-navbar',
  // standalone:true,   // this is added
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterOutlet, // this is changed
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatExpansionModule,
    MatMenuModule,
    SuperAdminDashboardComponent,
    AlertNotificationComponent,
    MatSelect,
    MatOption,
    MainDashboardComponent
  ],

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  showCropsMenu = false;


  isCollapsed = true;
  userName: any = "";
  userRole: any = "";

  constructor(private router: Router) { }

  onCropChange(value: string) {
    if (value === 'health') {
      this.router.navigate(['/crops-health']);
    } else if (value === 'management') {
      this.router.navigate(['/crops-management']);
    }
  }
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(){
    let activeUser=JSON.parse(sessionStorage.getItem('currentUser')||'null')
    console.log(activeUser)
    this.userName=activeUser.fullName;
    this.userRole=activeUser.role;
  }

}
