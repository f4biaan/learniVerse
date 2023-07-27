import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  eventos: any[] = [];
  speakers: any[] = [];

  constructor(private firestore: FirestoreService) {}

  ngOnInit(): void {
    this.firestore.getEvents().subscribe((events) => {
      this.eventos = events;
    });
    this.firestore.getSpeakers().subscribe((speakers) => {
      this.speakers = speakers;
    });
  }
}
