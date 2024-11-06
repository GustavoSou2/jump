import { Component, Input, input } from '@angular/core';
import { Notification } from '../../features/notification/notification.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'notification-item',
  standalone: true,
  imports: [],
  templateUrl: './notification-item.component.html',
  styleUrl: './notification-item.component.scss',
})
export class NotificationItemComponent {
  @Input() set item(item: Notification) {
    const categoryDict = {
      mail: 'envelope-regular.svg',
      social: 'message-regular.svg',
      event: 'calendar-days-solid.svg',
      other: 'ellipsis-solid.svg',
    };

    this._item = {
      ...item,
      svgCode: categoryDict[item.category],
    };
  }
  _item!: any;
}
