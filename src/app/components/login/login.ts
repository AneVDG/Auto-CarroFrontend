import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal';
@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
 @Input() isOpen: boolean = false;
 @Output() closeModal = new EventEmitter<void>();
 @Output() switchRegister = new EventEmitter<void>();

 loginData: loginRequest = {
  email: '';
  password: '',
 }

 isLoading: boolean = false;
 errorMessage: String = '';

 open(): void {
  this.isOpen = true;
  this.resetForm();
 }

 close(): void {
  this.isOpen = false;
  this.closeModal.emit();
  this.resetForm();
 }
 resetForm(): void{
  this.errorMessage = '';
  this.loginData = {
    email: '',
    password: '',
  }
 }
}
