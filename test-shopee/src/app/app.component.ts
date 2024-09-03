import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { NevbarComponent } from "./components/nevbar/nevbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FlashsaleComponent } from './pages/flashsale/flashsale.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NevbarComponent, FooterComponent, FlashsaleComponent, LoginComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-shopee';
}
