import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) { }
  homepage() {
    this.router.navigate(['home']);
  }
}
