import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-ponente',
  templateUrl: './crear-ponente.component.html',
  styleUrls: ['./crear-ponente.component.css']
})
export class CrearPonenteComponent {
  onFileSelected(event: any) {
    // Aquí puedes manejar la lógica para cargar la imagen del ponente
    // Puedes obtener el archivo seleccionado a través de event.target.files[0]
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
