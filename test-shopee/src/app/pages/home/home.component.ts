
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NevbarComponent } from "../../components/nevbar/nevbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NevbarComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private routes: Router) { }

  items = [
    {
      name: 'Apple Watch Series 7 GPS',
      image: 'https://down-th.img.susercontent.com/file/sg-11134252-7rdx5-ly52hxjzhkhnd9',
      rating: 4,
      price: 599
    },
    {
      name: 'Apple Watch Series 7 GPS',
      image: 'https://down-th.img.susercontent.com/file/sg-11134252-7rdx5-ly52hxjzhkhnd9',
      rating: 4,
      price: 599
    },
    {
      name: 'Apple Watch Series 7 GPS',
      image: 'https://down-th.img.susercontent.com/file/sg-11134252-7rdx5-ly52hxjzhkhnd9',
      rating: 5,
      price: 599
    },
    {
      name: 'Apple Watch Series 7 GPS',
      image: 'https://down-th.img.susercontent.com/file/sg-11134252-7rdx5-ly52hxjzhkhnd9',
      rating: 3,
      price: 599
    },
    {
      name: 'Apple Watch Series 7 GPS',
      image: 'https://down-th.img.susercontent.com/file/sg-11134252-7rdx5-ly52hxjzhkhnd9',
      rating: 5,
      price: 599
    },
    {
      name: 'Apple Watch Series 7 GPS',
      image: 'https://down-th.img.susercontent.com/file/sg-11134252-7rdx5-ly52hxjzhkhnd9',
      rating: 5,
      price: 599
    },
    {
      name: 'Apple Watch Series 7 GPS',
      image: 'https://down-th.img.susercontent.com/file/sg-11134252-7rdx5-ly52hxjzhkhnd9',
      rating: 4,
      price: 599
    },
    {
      name: 'Apple Watch Series 7 GPS',
      image: 'https://down-th.img.susercontent.com/file/sg-11134252-7rdx5-ly52hxjzhkhnd9',
      rating: 4,
      price: 599
    },
    {
      name: 'Apple Watch Series 7 GPS',
      image: 'https://down-th.img.susercontent.com/file/sg-11134252-7rdx5-ly52hxjzhkhnd9',
      rating: 5,
      price: 599
    },
    {
      name: 'Apple Watch Series 7 GPS',
      image: 'https://down-th.img.susercontent.com/file/sg-11134252-7rdx5-ly52hxjzhkhnd9',
      rating: 3,
      price: 599
    },
    {
      name: 'Apple Watch Series 7 GPS',
      image: 'https://down-th.img.susercontent.com/file/sg-11134252-7rdx5-ly52hxjzhkhnd9',
      rating: 5,
      price: 599
    },
    {
      name: 'Apple Watch Series 7 GPS',
      image: 'https://down-th.img.susercontent.com/file/sg-11134252-7rdx5-ly52hxjzhkhnd9',
      rating: 5,
      price: 599
    },

  ];

  categories = [
    { name: 'Noteworthy technology', imageUrl: 'https://brandbenefit.co.th/wp-content/uploads/2022/03/2-%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B3%E0%B8%AD%E0%B8%B2%E0%B8%87.png' },
    { name: 'Noteworthy technology', imageUrl: 'https://brandbenefit.co.th/wp-content/uploads/2022/03/2-%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B3%E0%B8%AD%E0%B8%B2%E0%B8%87.png' },
    { name: 'Noteworthy technology', imageUrl: 'https://brandbenefit.co.th/wp-content/uploads/2022/03/2-%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B3%E0%B8%AD%E0%B8%B2%E0%B8%87.png' },
    { name: 'Noteworthy technology', imageUrl: 'https://brandbenefit.co.th/wp-content/uploads/2022/03/2-%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B3%E0%B8%AD%E0%B8%B2%E0%B8%87.png' },
    { name: 'Noteworthy technology', imageUrl: 'https://brandbenefit.co.th/wp-content/uploads/2022/03/2-%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B3%E0%B8%AD%E0%B8%B2%E0%B8%87.png' },
    { name: 'Noteworthy technology', imageUrl: 'https://brandbenefit.co.th/wp-content/uploads/2022/03/2-%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B3%E0%B8%AD%E0%B8%B2%E0%B8%87.png' },
    { name: 'Noteworthy technology', imageUrl: 'https://brandbenefit.co.th/wp-content/uploads/2022/03/2-%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B3%E0%B8%AD%E0%B8%B2%E0%B8%87.png' },
    { name: 'Noteworthy technology', imageUrl: 'https://brandbenefit.co.th/wp-content/uploads/2022/03/2-%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B3%E0%B8%AD%E0%B8%B2%E0%B8%87.png' },
    { name: 'Noteworthy technology', imageUrl: 'https://brandbenefit.co.th/wp-content/uploads/2022/03/2-%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B3%E0%B8%AD%E0%B8%B2%E0%B8%87.png' },
    { name: 'Noteworthy technology', imageUrl: 'https://brandbenefit.co.th/wp-content/uploads/2022/03/2-%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B3%E0%B8%AD%E0%B8%B2%E0%B8%87.png' },

  ];

  flashsale() {
    this.routes.navigate(['/flash-sale']);
  }
  detail() {
    this.routes.navigate(['/product']);
  }

}
