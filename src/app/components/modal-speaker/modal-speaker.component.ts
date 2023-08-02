import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-speaker',
  templateUrl: './modal-speaker.component.html',
  styleUrls: ['./modal-speaker.component.css']
})
export class ModalSpeakerComponent {

  @Input() speaker: any;

  closeModal() {
    // Lógica para cerrar el modal
    this.speaker = undefined || null;
  }

}
