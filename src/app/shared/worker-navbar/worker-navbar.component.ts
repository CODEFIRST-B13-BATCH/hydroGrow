import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from "@angular/material/list";
import { RouterLink, Router } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-worker-navbar',
  standalone:true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatToolbar,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatListModule,
    RouterLink,
    MatCardModule
],
  templateUrl: './worker-navbar.component.html',
  styleUrl: './worker-navbar.component.css',
})
export class WorkerNavbarComponent {
 
 userName: string = "";
  userRole:  string = "";
    constructor(private router: Router) { }

 
isCollapsed = false;
fileInput: any;

toggleSidebar(){
  this.isCollapsed  = !this.isCollapsed ;
}


onFileSelected(event: any) {
  const file = event.target.files[0];

  if (file) {
    console.log("Selected file:", file);

    //  later you can send this to backend
  }
}

 ngOnInit() {
    const data = localStorage.getItem('currentUser');

    if (data) {
      const activeUser = JSON.parse(data);

      this.userName = activeUser?.fullName || '';
      this.userRole = activeUser?.role || '';

      console.log("User:", activeUser);
    } else {
      console.log("No user found in localStorage");
    }
  }

onLogout() {
   localStorage.removeItem('currentUser'); // Clear the session
  // sessionStorage.clear(); 
  this.router.navigate(['/']);
}
}
