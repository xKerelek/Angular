import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alert$ = new Subject<string | null>();
  private timer: any;

  showAlert(message: string) {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.alert$.next(message);

    this.timer = setTimeout(() => {
      this.alert$.next(null);
      this.timer = null;
    }, 3000);
  }
}
