import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoreService } from 'src/app/services/autore.service';

@Component({
  selector: 'app-autore-details',
  templateUrl: './autore-details.page.html',
  styleUrls: ['./autore-details.page.scss'],
})
export class AutoreDetailsPage implements OnInit {
  autore: any = null;
  idOpera: any = null;  

  constructor(private route: ActivatedRoute, private autoreService: AutoreService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.route.queryParams.subscribe((params) => {
      this.idOpera = params['operaId'];
      console.log(this.idOpera);  
    });

    this.autoreService.getAutoreDetails(id).subscribe((res) => {
      console.log(res);
      this.autore = res.data;
    });
  }

}
