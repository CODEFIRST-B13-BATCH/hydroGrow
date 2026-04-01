import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
   import { MatSelect, MatOption } from "@angular/material/select";
 
 
 

@Component({
 
  selector: 'app-navbar',
  standalone:true,   
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatExpansionModule,
    MatMenuModule,
    MatSelect,
    MatOption,
 
     
 
],
    
 

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
 

  showCropsMenu = false;


  isCollapsed = true;
  userName: string = "";
  userRole:  string = "";
  

  constructor(private router: Router) { }

  onCropChange(value: string) {
    if (value === 'health') {
      this.router.navigate(['/owner/crops-health']);
    } else if (value === 'management') {
      this.router.navigate(['/owner/crops-management']);
    }
  }
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

    ngOnInit() {
    const data = sessionStorage.getItem('currentUser');

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
    console.log('Logging out...');
     this.router.navigate(['/']);
 
}
  
}
