import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MailContact, MailService } from '../../../services/mail/mail.service';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../notification/notification.service';
import { LoaderService } from '../../loader/loader.service';

@Component({
  selector: 'j-cta',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [MailService],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
})
export class CtaComponent {
  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mailService: MailService,
    private notificationService: NotificationService,
    private loaderService: LoaderService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: [
        '',
        [Validators.required, Validators.minLength(3), Validators.email],
      ],
      message: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    if (!this.contactForm.valid) {
      return;
    }

    const contact: MailContact = this.contactForm.value;

    this.loaderService.showLoader(true);

    this.mailService.sendContactMail(contact).subscribe(
      (res) => {
        const { success } = res;

        this.loaderService.showLoader(false);

        if (success) {
          this.notificationService.addNotification({
            title: 'Obrigado!',
            message: 'Mensagem enviada com sucesso.',
            type: 'success',
            duration: 3000,
            category: 'mail',
          });

          this.contactForm.reset();

          return;
        }

        this.notificationService.addNotification({
          title: 'Erro',
          message:
            'Ops, algo deu errado... Tente novamente mais tarde ou entre em contato via WhatsApp.',
          type: 'error',
          duration: 3000,
          category: 'mail',
        });
      },
      (err) => {
        this.notificationService.addNotification({
          title: 'Erro',
          message: 'Ocorreu um erro ao enviar a mensagem. ' + err,
          type: 'error',
          duration: 3000,
          category: 'mail',
        });
      }
    );
  }
}
