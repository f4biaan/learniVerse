import { Component, OnInit } from '@angular/core';
import {
  FirestoreService,
  Trend,
} from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-tendencias',
  templateUrl: './tendencias.component.html',
  styleUrls: ['./tendencias.component.css'],
})
export class TendenciasComponent implements OnInit {
  trends: Trend[] = [];
  tendencias_locales: Trend[] = [];
  tendencias_nacionales: Trend[] = [];
  tendencias_globales: Trend[] = [];
  searchText: string = '';

  constructor(private firestore: FirestoreService) {}
    ngOnInit() {
      this.firestore.getTrends().subscribe((trends) => {
        this.trends = trends;
        this.filterTrends();
    });
  }

  filterTrends() {
    let search = this.searchText.toLowerCase();

    this.tendencias_locales = this.trends.filter((trend) => {
      return (
        trend.ubicacion === 'local' &&
        (trend.titulo.toLowerCase().includes(search) ||
          trend.palabrasClave.some((word) =>
            word.toLowerCase().includes(search)
          ))
      );
    });

    this.tendencias_nacionales = this.trends.filter((trend) => {
      return (
        trend.ubicacion === 'nacional' &&
        (trend.titulo.toLowerCase().includes(search) ||
        trend.palabrasClave.some(word => word.toLowerCase().includes(search)))
      );
    });
    
    this.tendencias_globales = this.trends.filter((trend) => {
      return (
        trend.ubicacion === 'global' &&
        (trend.titulo.toLowerCase().includes(search) ||
        trend.palabrasClave.some(word => word.toLowerCase().includes(search)))
      );
    });
    
  }

  onSearchChange(searchValue: any): void {
    this.searchText = searchValue.target.value;
    this.filterTrends();
  }
}
