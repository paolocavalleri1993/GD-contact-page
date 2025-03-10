import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    ImageModule,
    ToastModule,
    RippleModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService]
})
export class AppComponent {
  constructor(private messageService: MessageService) {}

  downloadVCard() {
    const vCardData = `
    BEGIN:VCARD
    VERSION:3.0
    FN:Alessio Vitiello
    ORG:Global Destiny srl
    TEL;TYPE=CELL:+393491118413
    EMAIL:alessiosamp10@gmail.com
    END:VCARD
    `;
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contatto.vcf';
    // a.click();
    // window.URL.revokeObjectURL(url);
  }

  thanks() {
    this.messageService.add({ severity: 'contrast', summary: 'A presto!', detail: 'Ricordati di condividere il tuo contatto inviandomi un messaggio su WhatsApp' });
  }
}
