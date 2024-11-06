import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Notification {
  id?: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'default';
  category: 'mail' | 'social' | 'event' | 'other';
  duration: number;
  created?: Date;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications: BehaviorSubject<Notification[]> = new BehaviorSubject<
    Notification[]
  >([]);
  showNotificatios$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor() {}

  getAllNotifications() {
    return this.notifications.getValue();
  }

  addNotification(notification: Notification) {
    if (!this.hasNotifications()) {
      this.showNotificatios$.next(true);
    }

    let notificationAlreadyExists = this.getAllNotifications();

    this.notifications.next([...notificationAlreadyExists, notification]);

    if (!!notification.duration && notification.duration > 0) {
      setTimeout(() => {
        this.notifications.next([]);
      }, notification.duration);

      if (!this.hasNotifications()) {
        this.showNotificatios$.next(false);
      }
    }
  }

  removeNotification(index: number) {
    let notificationAlreadyExists = this.getAllNotifications();
    this.notifications.next(notificationAlreadyExists.slice(index, 1));

    if (!this.hasNotifications()) {
      this.showNotificatios$.next(false);
    }
  }

  hasNotifications() {
    return this.getAllNotifications().length > 0;
  }
}
