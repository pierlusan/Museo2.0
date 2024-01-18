import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestBookService } from 'src/app/services/guest-book.service';

@Component({
  selector: 'app-nuovo-commento',
  templateUrl: './nuovo-commento.page.html',
  styleUrls: ['./nuovo-commento.page.scss'],
})
export class NuovoCommentoPage implements OnInit {

  form: any;

  constructor(private fb: FormBuilder, private router: Router, private guestbookService: GuestBookService) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [''],
      cognome: [''],
      descrizione: ['']
    });
  }

  onSubmit(){
    let data={
      nome: this.form.nome,
      cognome: this.form.cognome,
      descrizione: this.form.descrizione,
    }
    this.guestbookService.addComment(JSON.stringify(data));
  }

}
