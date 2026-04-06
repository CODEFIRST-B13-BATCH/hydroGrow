import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatNavList } from "@angular/material/list";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
 import { SuperAdminDashboardComponent } from "../../components/admin/super-admin-dashboard/super-admin-dashboard.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navabr',
  standalone:true,
  imports: [MatIcon, MatNavList, MatSidenav, MatSidenavContainer, MatSidenavContent, SuperAdminDashboardComponent],
  templateUrl: './admin-navabr.component.html',
  styleUrl: './admin-navabr.component.css'
})
export class AdminNavabrComponent {

 userName: string = "";
  userRole:  string = "";
   constructor(private router: Router) { }

   ngOnInit() {
    const data = localStorage.getItem('currentUser');

    if (data) {
      const activeUser = JSON.parse(data);

      this.userName = activeUser?.fullName || '';
      this.userRole = activeUser?.role || '';

      console.log("User:", activeUser);
    } else {
      console.log("No user found in sessionStorage");
    }
  }

onLogout() {
localStorage.removeItem('currentUser'); // Clear the session
  sessionStorage.clear(); 
  this.router.navigate(['/']);
}

}
