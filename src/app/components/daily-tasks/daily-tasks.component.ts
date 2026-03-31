import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';

interface TaskCard {
  priorityText: string;
  priorityClass: string;
  dueTime: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface AssignedFarm {
  name: string;
  description: string;
  statusText: string;
  statusClass: string;
  statusDetail: string;
  imageUrl: string;
}

interface MaintenanceLog {
  task: string;
  completed: string;
  notes: string;
}

@Component({
  selector: 'app-daily-tasks',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatTableModule
  ],
  templateUrl: './daily-tasks.component.html',
  styleUrls: ['./daily-tasks.component.css']
})
export class DailyTasksComponent {
  currentDate = 'Friday, October 27 — Greenhouse 01 & 02';
  
toDo:any =true;
inProgress:any =false;
completed:any =false;
  tasks: TaskCard[] = [
    {
      priorityText: 'HIGH PRIORITY',
      priorityClass: 'high-priority',
      dueTime: 'Due 10:00 AM',
      title: 'Check pH in Greenhouse 1',
      description: 'Ensure pH levels are between 5.5 and 6.5 across all gutters.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWYdtG-8nnix1cJDh2S-u1keqaqqbcjdWSgiM76lP03qrHLYrm2kVnshKBrBB5MU-h6w7N17vg_OEPXPEYAG7M63Yx19J6TItNVZpEhv5hQy5ZGjTsAsF4S3eFIL9EJvrlZImsGvFgaWoUIfzdD-6YcDCUak-MPmtkebI3tMhRtQ3pRvz3ja6orf64stA4Lfyd1uZeu3AN92YKhnFe8dvE8Mm7YH5bfDoD-iogmsYQZS49fmmrXhRF-BrqKjV94682ds4rljhW7gDn'
    },
    {
      priorityText: 'STANDARD',
      priorityClass: 'standard',
      dueTime: 'Due 1:00 PM',
      title: 'Refill Reservoir B',
      description: 'Top up nutrient solution for Tomato Batch #2.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiL3wpX6XeJVmQiuL8LFJkMnaNUKRsKcoDLme-MCwbr2racXgqIYIDIbmZZnh_eSMiyOqwgF4hqTvNtNAIyLtQ-uXPen9A6HWQHyy0ATczGTtENrl0QnjtPTyU0nwoCQ5JcEhvBjWeEK1KrS-O9hv8M__2r63SfVL2V1zl7cdCVlZgiLqbB-pjYpyEDC1ydfe6iP_9VQ6vNPS2XwKTxhp-wrIij6Rxt1haCFbja6AuzoLnyW0E_kAd2H-iLVOYylgYUF8MQzv1iFmA'
    },
    {
      priorityText: 'MAINTENANCE',
      priorityClass: 'maintenance',
      dueTime: 'Due 4:00 PM',
      title: 'Prune Tomato Batch #4',
      description: 'Remove lower suckers to improve airflow.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsuhlKAu5T3Uajvsfx6UxEERtQugwfRIxWWRugbfmDZ3bS8kE2_y0JQAeGzvkXofxCKZ5BjM36TTZ9-JFX25hBbhowLsgMAmP-BUfbDiykoyP4VYvaZKx4jMnhRkFyfc_97iHH-zmCrSjnO5ze_LF1nN5VwozR4l-hX1ozMTVM35R2YYd02Otf6ba2tlaiLzFqUzDvVTCcBV_EHJRN0Qs6Lyez38UJbb2cQfAyEUKGeHaTs_a1Y3suCKN9SNQLti0SRYfPdmbHsbr4'
    }
  ];

  farms: AssignedFarm[] = [
    {
      name: 'Central Valley Hub',
      description: 'Greenhouses 1-5 • Vertical Towers',
      statusText: 'OPTIMAL',
      statusClass: 'status-optimal',
      statusDetail: '82% HUMIDITY',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNSn0XKy4RijUjH0iSCuyA6u4mdMb548Y1X6OFtCU8EinElmqQvjrnmPEujKc-VpYtuhdQ16A7RE3cX1XflsP1zRPI8UTRrCo09YtondWxjbR6yVZOj8U_DnUuCG3ZTtYUrd7jx_6ktXsiu_Zz-719ANVK_R3CdxlX25YgNdLELyOyQinXmINSeEngtunbc1bG4c_BHus-WnHkOK2Em-CdngdSTclPN-fWFQWilyy8vaUDJ2y_z88vz5rSVMPsMdxJHFXTN7Pap62u'
    },
    {
      name: 'North Ridge Facility',
      description: 'Lettuce NFT System • Bays A & B',
      statusText: 'ATTENTION',
      statusClass: 'status-attention',
      statusDetail: '6.8 PH LEVEL',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrFlLvYgneuAWtWGSKdT3Mb92E9zlzqnSdl1j7MMiX5LtcPOnZ1WjFIe0qYBIs3YjIRmMuagNfSdY8jKWVZCQU2LHSOhapkSbtKoVwmAI8ySD7WUJofeKcuKTvH89dXybyB4Qp7Vv8ZG791QazVVsAw6wjOQl2Eh9vkkDNbz75bcjY11IAmhmGEjP1fRxcu0cVf8JSTcBYOQRj8Mh3VS5bBqp89Acx4VTUSaMWJ7v1Y7raXX6dDT1ya3TaGYw-pdwvPSIxDa_suhq4'
    }
  ];

  maintenanceLogs: MaintenanceLog[] = [
    { task: 'Pump Filter Clean', completed: '08:15 AM', notes: 'Slight buildup on mesh 2.' },
    { task: 'Fertilizer Check', completed: 'Yesterday', notes: 'Added 2L of Nitrogen mix.' },
    { task: 'Light Sensor Calibration', completed: 'Oct 25', notes: 'Reset Bay 4 sensors.' },
    { task: 'Drainage Inspection', completed: 'Oct 24', notes: 'All clear.' }
  ];
  
  displayedColumns: string[] = ['task', 'completed', 'notes'];
}
  