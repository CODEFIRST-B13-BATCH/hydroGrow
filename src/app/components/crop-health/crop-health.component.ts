import { AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface AnalysisRecord {
  thumbnailUrl: string;
  cropType: string;
  scanDate: string;
  status: string;
  statusType: 'healthy' | 'issue';
}

@Component({
  selector: 'app-crop-health',
  imports: [MatButtonModule,MatCardModule,MatProgressBarModule,MatTableModule, MatInputModule, MatFormFieldModule,FormsModule,CommonModule],
  templateUrl: './crop-health.component.html',
  styleUrl: './crop-health.component.css'
})
export class CropHealthComponent implements AfterViewChecked {
  scanId = 'SCAN_ID: 99421-B';

  leafImageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbrhZnKj9UZBcpki7x_k0b0H46pNZgbjZpablvs0qwVKbZJ2mXIQZJVbMP7Iikp500IwFeyN9PsxHkISdIscoqbTPyEek3_8BXMELu3g0q59UoHkyYbc2PU-ogHEoIxt0Qc4tPaUBYeAVv1oTmSUa1CsceeMjfkhs5TYhUfnN1GnyjrODLTUV0D878m16k58-76FUNUsXXyhjdMYCX5-f2sTvox0knp07cMeloKwe9CQpZ5qb5hrwoWGSLWdyV8QXYnG4wzVsxuE6R';

  diagnosisLabel = 'AI Diagnosis';
  diseaseName = 'Early Blight Detected';
  confidenceScore = 94;
  diagnosisColor = '#dc2626';
  diagnosisStatus: 'healthy' | 'warning' | 'danger' = 'danger';

  recommendedActions = [
    'Prune affected leaves immediately to prevent spore dispersal.',
    'Adjust nutrient balance (increase Potassium levels).',
    'Apply copper-based fungicide in the early morning.'
  ];

    recentAnalyses: AnalysisRecord[] = [
    {
      thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRAOi3pGcKN0NDGDOBD4Pv-uR467ZVNpa9etN3TFk3GrXdKF44pXPniftYpVbkLHA_HZqf-nLW0JxVJmD72LQxIeEwBpdaI3ZteKpz_lvjXI0Ig9o5-Ib013nipRMPRqthD1DL2B6NHZoFE20EyDkcEqEyRpPgS2eJ_Nt0Nt957c1H5HQCLmC8-NOr55WBsGnwFIUZC8hO5DRmTnIf-DUz7n22jTsNQ8R8dZ7ik_c4YH-kOZHmIysKJ0vjxFsdQp1HoH3MdnTES3Fv',
      cropType: 'Potato',
      scanDate: 'Oct 24, 2023',
      status: 'Healthy',
      statusType: 'healthy'
    },
    {
      thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl4DKaFpxVuoIX1uwcowD0ydk47QIhprrdtta7H8oBsKytqy-1GHnY2VGDeAScgwWpSs4egjNkpQ4Pu7dldeSj3dqBqFGhqCi6zsdv0OQoo6dpjg-7k7qf56qJxASLEz-5g_jDlob-ZLtyI9eIUaPpKQOQHSw8Pem8gq5ppmOEV5HVnZiJ7e3GuJicq8Slw6WcEwvzD2QPSU8-K16PyTb1o6Xnw7ahbLvY7-qhX3t5q-xHFYDTCw67noLXRFdHAxJuLNuI4Gr_S4rQ',
      cropType: 'Corn',
      scanDate: 'Oct 22, 2023',
      status: 'Issue Detected',
      statusType: 'issue'
    },
    {
      thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-8Nldz1Q28i7zkj2L4jMY791XRznX80RVqE7USr0xVGOnvpWHSLljGZYlqgo2R5Qw5ZX4rYjIAoVs1ZUhcaVWUikhHdhkErd0HqorYAfN3sncHPrUiwddJsBmtZUUGl8AWkKjiCCCbKINzhVP1Y60pZzjl3K_sLNtl6W52yemlUlJ-ydhsfBwV1HucniDpeDaI80xAxE5Lw6-0oLvoSZ3s1DYjWc1p14AemCPZCjY8FzSR-GgoYw99ZA6dcOwkFK3BXy-uM7gMacF' ,
      cropType: 'Pepper',
      scanDate: 'Oct 20, 2023',
      status: 'Healthy',
      statusType: 'healthy'
    }
  ];

  displayedColumns: string[] = ['thumbnail', 'cropType', 'scanDate', 'status', 'action'];


  
uploadTitle = 'New Analysis';

// bot
  @ViewChild('chatWindow') chatWindow!:ElementRef;
  userInput:string='';
 chatMessages: { sender: string; text: string }[] = [
  {
    sender: 'bot',
    text: 'Hello! 👋 I am your AI Farm Advisor.\n\nYou can ask me about:\n🌱 Irrigation schedules\n🍃 Organic fungicides\n🔍 Crop diseases\n🌿 Fertilizers\n\nHow can I help you today?'
  }
];
  scrollToBottom(){
    try{
      this.chatWindow.nativeElement.scrollTop= this.chatWindow.nativeElement.scrollHeight;
    }catch(e){}
  }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }


  sendMessage():void{
    if(!this.userInput.trim()) return;
    const userText= this.userInput.trim();
    this.chatMessages.push({
      sender:'user',
      text:userText
    })
    this.userInput="";
    setTimeout(()=>{
      let reply= this.getBotReply(userText);
      this.chatMessages.push({
        sender:'bot',
        text:reply
      });
    },600);
  }

  getBotReply(message:string):string{
    const msg = message.toLowerCase();
    // --- RULE 1: Greetings ---
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return 'Hello! I am your AI Farm Advisor. How can I help you today? You can ask about irrigation, diseases, or fertilizers.';
    }

    // --- RULE 2: Yes / Schedule ---
    if (msg.includes('yes') || msg.includes('schedule') || msg.includes('irrigation schedule')) {
      return '🌱 7-Day Irrigation Schedule:\n\nDay 1–3: Water every morning at 6am, 2 liters per plant.\nDay 4–5: Reduce to 1.5 liters, check soil moisture.\nDay 6–7: Water only if topsoil is dry.\n\nTip: Always water at the base, avoid wetting leaves!';
    }

    // --- RULE 3: Fungicide ---
    if (msg.includes('fungicide') || msg.includes('organic') || msg.includes('blight')) {
      return '🍃 Organic Fungicide Options:\n\n1. Copper Soap Fungicide — apply every 7 days\n2. Serenade Garden (Bacillus subtilis) — safe for edibles\n3. Neem Oil Spray — apply in the evening\n\nAvoid applying during peak sun hours.';
    }

    // --- RULE 4: Water / Irrigation general ---
    if (msg.includes('water') || msg.includes('irrigat')) {
      return '💧 Tomatoes need deep watering 2–3 times per week. Use drip irrigation if possible to avoid fungal issues from wet leaves.';
    }

    // --- RULE 5: Disease / Pest ---
    if (msg.includes('disease') || msg.includes('pest') || msg.includes('virus')) {
      return '🔍 Common Tomato Issues:\n\n• Early Blight — brown spots with rings\n• Late Blight — dark water-soaked lesions\n• Septoria Leaf Spot — small circular spots\n\nWhich one would you like treatment advice for?';
    }

    // --- RULE 6: Fertilizer ---
    if (msg.includes('fertiliz') || msg.includes('nutrient') || msg.includes('npk')) {
      return '🌿 For tomatoes, use a balanced NPK fertilizer (10-10-10) during early growth. Switch to low-nitrogen, high-phosphorus (5-10-10) during flowering to boost fruit yield.';
    }

    // --- RULE 7: Tomato ---
    if (msg.includes('tomato')) {
      return '🍅 Tomatoes need:\n• Full sun (6–8 hours/day)\n• pH 6.0–6.8 soil\n• Regular watering without waterlogging\n• Staking support when they grow tall\n\nWhat specific problem are you facing?';
    }

    // --- DEFAULT FALLBACK ---
    return "I'm not sure about that yet. Try asking me about irrigation schedules, organic fungicides, diseases, or fertilizers for your crops! 🌾";
  }
  
}

