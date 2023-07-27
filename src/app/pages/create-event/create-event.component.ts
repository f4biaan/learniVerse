import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  eventForm!: FormGroup;
  isChatGPT = false;

  constructor() {}

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
  }

  toggleSwitch(value: boolean) {
    this.isChatGPT = value;
    this.eventForm.patchValue({ aiOption: value ? 'Copy.ai' : 'Chat GPT' });
  }
}
