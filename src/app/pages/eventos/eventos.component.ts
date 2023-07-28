import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: any[]; // Suponiendo que los eventos son de tipo any
  eventosFiltrados: any[]; // Lista de eventos filtrados por el término de búsqueda
  pageSize = 5; // Tamaño de página (puedes ajustar este valor según tus necesidades)
  currentPage = 1; // Página actual
  showLoading: boolean = false;
  showFileUploader: boolean = false; 
  loadingFile: boolean = false;
  

  constructor() {
    // Aquí obtienes los datos de los eventos (puedes hacerlo desde un servicio, API, etc.)
    this.eventos = [
      { nombre: 'Evento 1', fecha: '2023-07-27', ponente: 'Ponente 1', estado: 'Activo' },
      { nombre: 'Evento 2', fecha: '2023-08-10', ponente: 'Ponente 2', estado: 'Inactivo' },
      { nombre: 'Evento 3', fecha: '2023-09-05', ponente: 'Ponente 3', estado: 'Activo' },
      { nombre: 'Evento 4', fecha: '2023-10-15', ponente: 'Ponente 4', estado: 'En espera' },
      { nombre: 'Evento 5', fecha: '2023-11-20', ponente: 'Ponente 5', estado: 'Activo' },
      // ... Agrega más eventos ...
    ];
    this.eventosFiltrados = this.eventos; // Inicialmente, eventosFiltrados es igual a eventos
  }

  ngOnInit() {
    // Aquí ocultamos la card automáticamente al cargar el documento
    this.showFileUploader = false;
  }
  
  onFileSelected(event: any) {
    // Aquí puedes realizar alguna validación del archivo si lo deseas
    // Por ejemplo, puedes verificar el tipo de archivo o el tamaño.
    
    // Llamamos a la función para cargar el archivo
    this.uploadFile();
  }

  // Función para simular la carga del archivo (puedes modificarla según tus necesidades)
  uploadFile() {
    this.loadingFile = true; // Mostrar el icono de cargando
  
    // Simulamos una carga de archivo durante 3 segundos
    setTimeout(() => {
      this.loadingFile = false; // Ocultar el icono de cargando
      this.showFileUploader = false; // Cerramos la card después de cargar el archivo
      // Aquí puedes realizar alguna acción adicional después de cargar el archivo
    }, 3000);
  }
  
  
  
  

  toggleFileUploader() {
    this.showFileUploader = !this.showFileUploader;
  }
  

  crearEvento() {
    // Lógica para crear un nuevo evento (puedes abrir un formulario modal, etc.)
    console.log('Crear nuevo evento');
  }

  editarEvento(evento: any) {
    // Lógica para editar el evento
    console.log('Editar evento:', evento);
  }

  enviarCorreo(evento: any) {
    // Lógica para enviar el correo
    console.log('Enviar correo:', evento);
  }

  eliminarEvento(evento: any) {
    // Lógica para eliminar el evento
    console.log('Eliminar evento:', evento);
  }

  cambiarPagina(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  obtenerEventosPaginaActual() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.eventosFiltrados.slice(startIndex, endIndex);
  }

  // Función para filtrar los eventos por el término de búsqueda
  filtrarEventos(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const termino = inputElement.value.trim().toLowerCase(); // Convertir el término de búsqueda a minúsculas
    this.eventosFiltrados = this.eventos.filter(evento => evento.nombre.toLowerCase().includes(termino));
  }

  // Genera un array de números desde 1 hasta el número de páginas
  get paginas(): number[] {
    const totalPages = Math.ceil(this.eventosFiltrados.length / this.pageSize);
    return Array(totalPages).fill(0).map((x, i) => i + 1);
  }
}
