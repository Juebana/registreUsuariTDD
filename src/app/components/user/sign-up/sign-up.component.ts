import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  isButtonDisabled = true;
  getLanguages(): string[] {
    return ['français', 'anglais', 'italien', 'catalan', 'castellano'].sort();
  }
}
