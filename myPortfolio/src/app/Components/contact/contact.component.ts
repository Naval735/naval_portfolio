import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',   // Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID',  // Replace with your EmailJS Template ID
      e.target as HTMLFormElement,
      'YOUR_PUBLIC_KEY'    // Replace with your EmailJS Public Key
    ).then((result: EmailJSResponseStatus) => {
      alert('Message sent successfully!');
      (e.target as HTMLFormElement).reset();
    }, (error) => {
      alert('Failed to send message. Try again.');
      console.error(error.text);
    });
  }
}
