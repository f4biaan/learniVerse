import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  FirestoreService,
  Trend,
} from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  eventForm!: FormGroup;
  isChatGPT = false;

  eventos: any[] = [];
  eventosFiltrados: any[] = [];
  pageSize = 5;
  currentPage = 1;
  showLoading: boolean = false;
  showFileUploader: boolean = false;
  loadingFile: boolean = false;
  trends: Trend[] = []; // Array to hold trend data from Firestore
  stateTrends: [string, number][] = [];

  constructor(private firestore: FirestoreService) {}

  ngOnInit() {
    this.eventForm = new FormGroup({
      title: new FormControl('Jornada de Transformación Digital'),
      description: new FormControl(
        '¡Únete a nuestra increíble Jornada de Transformación Digital! Descubre cómo la Transformación Digital está revolucionando el mundo. Ven y conoce cómo nuestros programas académicos en el campus de UTPL pueden impulsar tu futuro en la era digital.'
      ),
      aiOption: new FormControl('Chat GPT'),
      eventType: new FormControl('bootcamp'),
      location: new FormControl(
        'Auditorio Principal, Edificio A, Campus UTPL, Loja, Ecuador'
      ),
      speaker: new FormControl(''),
      date: new FormControl('2023-08-15'),
    });

    this.firestore.getTrends().subscribe((trends) => {
      this.trends = trends;
    });

    this.getTrends();
  }

  getTrends() {
    let count: { [key: string]: number } = {};
    this.eventos.forEach((evento) => {
      let state = evento.estado;
      count[state] = (count[state] || 0) + 1;
    });

    let sortable: [string, number][] = [];
    for (let state in count) {
      sortable.push([state, count[state]]);
    }

    sortable.sort((a, b) => b[1] - a[1]);

    this.stateTrends = sortable.slice(0, 3); 
  }

  toggleSwitch(value: boolean) {
    this.isChatGPT = value;
    this.eventForm.patchValue({ aiOption: value ? 'Copy.ai' : 'Chat GPT' });
  }
}
