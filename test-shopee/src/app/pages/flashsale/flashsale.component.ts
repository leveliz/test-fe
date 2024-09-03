import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NevbarComponent } from "../../components/nevbar/nevbar.component";
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-flashsale',
  standalone: true,
  imports: [
    CommonModule,
    NevbarComponent,
    FooterComponent
  ],
  templateUrl: './flashsale.component.html',
  styleUrl: './flashsale.component.css'
})
export class FlashsaleComponent {
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
}
