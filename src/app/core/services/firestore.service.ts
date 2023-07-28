import { Injectable } from '@angular/core';
import {
  CollectionReference,
  Firestore,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Event {}
export interface Speaker {}
export interface Trend {
  palabrasClave: string[];
  temasRelacionados: string[];
  titulo: string;
  ubicacion: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private eventsCollection: CollectionReference<any>;
  private speakersCollection: CollectionReference<any>;
  private trendsCollection: CollectionReference<any>;

  constructor(afs: Firestore) {
    this.eventsCollection = collection(afs, 'eventos');
    this.speakersCollection = collection(afs, 'speakers');
    this.trendsCollection = collection(afs, 'trends');
  }

  getEvents = (): Observable<any[]> => {
    return collectionData(this.eventsCollection);
  };

  getSpeakers = (): Observable<any[]> => {
    return collectionData(this.speakersCollection);
  };

  getTrends = (): Observable<Trend[]> => {
    return collectionData(this.trendsCollection);
  };
}
