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

  local_filter: Trend[] = [];
  national_filter: Trend[] = [];
  global_filter: Trend[] = [];

  constructor(private firestore: FirestoreService) {}

  ngOnInit() {
    this.firestore.getTrends().subscribe((trends) => {
      this.trends = trends;
      // console.log(this.trends);
      this.tendencias_locales = this.trends.filter((trend) => {
        return trend.ubicacion === 'local';
      });
      this.tendencias_nacionales = this.trends.filter((trend) => {
        return trend.ubicacion === 'nacional';
      });
      this.tendencias_globales = this.trends.filter((trend) => {
        return trend.ubicacion === 'global';
      });
    });
  }
}
