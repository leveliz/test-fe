import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { NevbarComponent } from "../../components/nevbar/nevbar.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FooterComponent, NevbarComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


}
