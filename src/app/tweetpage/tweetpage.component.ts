import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweetpage',
  templateUrl: './tweetpage.component.html',
  styleUrls: ['./tweetpage.component.css']
})
export class TweetpageComponent implements OnInit {

  constructor() { }

  name=localStorage.getItem("stored_name")

  ngOnInit(): void {
  }

}
