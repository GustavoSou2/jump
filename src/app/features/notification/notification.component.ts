import { Component, OnInit, signal } from '@angular/core';
import { Notification, NotificationService } from './notification.service';
import { NotificationItemComponent } from '../../components/notification-item/notification-item.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'jump-notification',
  standalone: true,
  imports: [NotificationItemComponent, CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent implements OnInit {
  hasNotification: boolean = false;

  get notifications() {
    return this.notificationService.getAllNotifications();
  }

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.showNotificatios$.subscribe((show) => {
      this.hasNotification = show;
    });
  }
}
