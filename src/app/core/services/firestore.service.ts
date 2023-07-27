import { Injectable } from '@angular/core';
import {
  CollectionReference,
  Firestore,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private eventsCollection: CollectionReference<any>;
  private speakersCollection: CollectionReference<any>;

  constructor(afs: Firestore) {
    this.eventsCollection = collection(afs, 'eventos');
    this.speakersCollection = collection(afs, 'speakers');
  }

  getEvents = (): Observable<any[]> => {
    return collectionData(this.eventsCollection);
  };

  getSpeakers = (): Observable<any[]> => {
    return collectionData(this.speakersCollection);
  };
}
