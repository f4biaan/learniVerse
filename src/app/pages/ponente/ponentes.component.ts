import { Component } from '@angular/core';

@Component({
  selector: 'app-ponentes',
  templateUrl: './ponentes.component.html',
  styleUrls: ['./ponentes.component.css']
})
export class PonentesComponent {
  ponentes: any[]; // Suponiendo que los eventos son de tipo any
  ponentesFiltrados: any[]; // Lista de eventos filtrados por el término de búsqueda
  pageSize = 5; // Tamaño de página (puedes ajustar este valor según tus necesidades)
  currentPage = 1; // Página actual
  showLoading: boolean = false;
  showFileUploader: boolean = false; 
  loadingFile: boolean = false;
  

  constructor() {
    // Aquí obtienes los datos de los eventos (puedes hacerlo desde un servicio, API, etc.)
    this.ponentes = [
      { nombre: 'Ponente 1', cedula: '123456789', email: 'ponente1@gmail.com', profesion: ' Ingeniero' },
      { nombre: 'Ponente 2', cedula: '123456789', email: 'ponente1@gmail.com', profesion: 'Ingeniero' },
      { nombre: 'Ponente 3', cedula: '2123456789', email: 'ponente1@gmail.com', profesion: 'Ingeniero' },
      { nombre: 'Ponente 4', cedula: '123456789', email: 'ponente1@gmail.com', profesion: 'Ingeniero' },
      { nombre: 'Ponente 5', cedula: '123456789', email: 'ponente1@gmail.com', profesion: 'Ingeniero' },
      // ... Agrega más eventos ...
    ];
    this.ponentesFiltrados = this.ponentes; // Inicialmente, eventosFiltrados es igual a eventos
  }

  editarEvento(evento: any) {
    // Lógica para editar el evento
    console.log('Editar evento:', evento);
  }

  cambiarPagina(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  obtenerEventosPaginaActual() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.ponentesFiltrados.slice(startIndex, endIndex);
  }

  // Función para filtrar los eventos por el término de búsqueda
  filtrarEventos(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const termino = inputElement.value.trim().toLowerCase(); // Convertir el término de búsqueda a minúsculas
    this.ponentesFiltrados = this.ponentes.filter(evento => evento.nombre.toLowerCase().includes(termino));
  }

  // Genera un array de números desde 1 hasta el número de páginas
  get paginas(): number[] {
    const totalPages = Math.ceil(this.ponentesFiltrados.length / this.pageSize);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }
}
