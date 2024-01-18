import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { OperaService } from 'src/app/services/opera.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-opere',
  templateUrl: './opere.page.html',
  styleUrls: ['./opere.page.scss'],
})
export class OperePage implements OnInit {
  
  opere: any[] = [];
  currentPage = 1;
  imageBaseUrl = environment.images;

  constructor(private operaService: OperaService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadOpere();
  }

  async loadOpere(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: 'Caricamento...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.operaService.getOpere(this.currentPage).subscribe((res) => {
      loading.dismiss();
      this.opere.push(...res.data);
      console.log(res);
      event?.target.complete();
      if(event){
        event.target.disabled = this.currentPage === res.total_pages;
      }
    });
  }

  loadMore(event: InfiniteScrollCustomEvent){
    this.currentPage++;
    this.loadOpere(event);
  }
  

}
