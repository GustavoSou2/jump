import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api/api.service';

export interface MailContact {
  name: string;
  email: string;
  message: string;
}

@Injectable()
export class MailService {
  constructor(private api: ApiService<MailContact>) {}

  sendContactMail(mail: MailContact) {
    return this.api.create('mail/contact', mail);
  }
}
