import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperaService } from 'src/app/services/opera.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-opera-details',
  templateUrl: './opera-details.page.html',
  styleUrls: ['./opera-details.page.scss'],
})
export class OperaDetailsPage implements OnInit {
  opera: any = null;
  imageBaseUrl = environment.images;

  // ActivatedRoute da informazioni sulla rotta attiva (in questo caso l'id dell'opera)
  constructor(private route: ActivatedRoute, private operaService: OperaService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.operaService.getOperaDetails(id).subscribe((res) => {

      console.log(res);
      this.opera = res.data;
    });
  }

}
