import { Component, OnInit } from '@angular/core';
import { GuestBookService } from 'src/app/services/guest-book.service';
@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.page.html',
  styleUrls: ['./guest-book.page.scss'],
})
export class GuestBookPage implements OnInit {
  commenti: any=[];

  constructor(private guestbookService: GuestBookService) { }

  async ngOnInit() {
    this.commenti = this.guestbookService.getComments();
       
    
    console.log(this.commenti);
  }

 
}
