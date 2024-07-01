import { Component, OnInit } from '@angular/core';

declare var $: any; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {
      $('#carouselHistoria').carousel();

      $('.carousel-control-prev').click(() => {
        $('#carouselHistoria').carousel('prev');
      });

      $('.carousel-control-next').click(() => {
        $('#carouselHistoria').carousel('next');
      });
    });
  }

}
