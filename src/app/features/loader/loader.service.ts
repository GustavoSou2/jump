import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  showLoaders$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  set loader(show: boolean) {
    this.showLoaders$.next(show);
  }

  get loader() {
    return this.showLoaders$.getValue();
  }

  showLoader(state: boolean) {
    this.showLoaders$.next(state);
  }
}
