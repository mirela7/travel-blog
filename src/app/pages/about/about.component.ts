import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';  // Import necessary form classes
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about',
  imports: [ReactiveFormsModule, CommonModule, ButtonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @ViewChild("characterCounterSpan") characterCounterSpan : ElementRef;
  contactForm: FormGroup;

  constructor() {
    
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted successfully!', this.contactForm.value);
      alert('Thank you for reaching out!');
      this.contactForm.reset();
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  onInput() {
    this.characterCounterSpan.nativeElement.textContent = `${500 - this.message.value.length} characters remaining`;
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
