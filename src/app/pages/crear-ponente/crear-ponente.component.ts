import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-ponente',
  templateUrl: './crear-ponente.component.html',
  styleUrls: ['./crear-ponente.component.css']
})
export class CrearPonenteComponent {
  selectedFile: File | undefined;
  selectedFileURL: string | undefined;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    this.getBase64(this.selectedFile);
  }

  borrarImagen() {
    this.selectedFile = undefined;
    this.selectedFileURL = undefined;
  }

  getBase64(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedFileURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  crearPonente() {
    // Lógica para crear al ponente
    // Puedes obtener los valores de los campos del formulario y enviarlos a través de un servicio o API
  }

  cancelar() {
    // Lógica para cancelar la creación del ponente
    // Por ejemplo, puedes redirigir a otra página o mostrar un mensaje de cancelación
  }

}
