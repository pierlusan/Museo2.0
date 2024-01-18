import { Component, OnInit } from '@angular/core';
import { AutoreService } from 'src/app/services/autore.service';
import { OperaService } from 'src/app/services/opera.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.page.html',
  styleUrls: ['./ricerca.page.scss'],
})
export class RicercaPage implements OnInit {
  opere: any = null;
  artisti: any = null;

  constructor(private operaService: OperaService, private autoreService: AutoreService) { }

  ngOnInit() {
  }

  handleInput(event: any) {
    const query = event.target.value;
    this.cerca(query);
  }

  cerca(stringa: string) {
    this.opere = [];
    this.operaService.getByFilter(stringa).subscribe(dati_opera => {
      console.log(dati_opera);
      this.opere = dati_opera.data;
    })
    this.autoreService.getByFilter(stringa).subscribe(dati_autore => {
      console.log(dati_autore);
      this.artisti = dati_autore.data;
    })
  }

}
