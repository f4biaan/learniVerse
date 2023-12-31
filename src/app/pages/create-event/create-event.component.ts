import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import {
  FirestoreService,
  Trend,
} from 'src/app/core/services/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  eventForm!: FormGroup;
  isChatGPT = false;

  speakers: any[] = [];
  speakers_secondary: any[] = [];

  eventos: any[] = [];
  eventosFiltrados: any[] = [];
  pageSize = 5;
  currentPage = 1;
  showLoading: boolean = false;
  showFileUploader: boolean = false;
  loadingFile: boolean = false;
  trends: Trend[] = []; // Array to hold trend data from Firestore
  stateTrends: [string, number][] = [];

  constructor(private firestore: FirestoreService, private router: Router) {}

  createEvent() {
    // Swal alert with confirmation
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, crear evento',
      cancelButtonText: 'No, cancelar',
    }).then((result) => {
      this.router.navigate(['/eventos']);
    });
  }

  ngOnInit() {
    this.firestore.getSpeakers().subscribe((speakers) => {
      this.speakers = speakers;
      // this.speakers_secondary = speakers;
      // console.log(this.speakers);
    });

    this.eventForm = new FormGroup({
      title: new FormControl('Jornada de Transformación Digital'),
      description: new FormControl(''),
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

  newText: string =
    '¡Únete a nuestra increíble Jornada de Transformación Digital! Descubre cómo la Transformación Digital está revolucionando el mundo. Ven y conoce cómo nuestros programas académicos en el campus de UTPL pueden impulsar tu futuro en la era digital.';
  delay: number = 50; // Delay in milliseconds between each character

  simulateWriting() {
    this.eventForm.controls['description'].setValue('');
    let i = 0;
    const typing = setInterval(() => {
      if (i < this.newText.length) {
        const current = this.eventForm.controls['description'].value;
        this.eventForm.controls['description'].patchValue(
          current + this.newText[i]
        );
        i++;
      } else {
        clearInterval(typing);
      }
    }, this.delay);
  }

  getSpeakers() {
    // Swañ añert to simulate loading data from linkedin que solo aprezca un segundo y se cierre
    Swal.fire({
      title: 'Buscando expositores...',
      html: 'Estamos busando los mejores expositores en Linkedin',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      // cerrar el Swañ despues de 2 segundos
      timer: 2000,
    });
    let i = 0;
    const addSpeakers = setInterval(() => {
      if (i < this.speakers.length) {
        this.speakers_secondary.push(this.speakers[i]);
        i++;
      } else {
        clearInterval(addSpeakers);
      }
    }, 800);
  }

  // modal speaker
  selectedSpeaker: any = null;
  openModal(speaker: any) {
    this.selectedSpeaker = speaker;
  }
  closeModal() {
    this.selectedSpeaker = null;
  }
}
