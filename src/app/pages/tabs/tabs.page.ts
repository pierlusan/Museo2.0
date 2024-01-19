import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
 

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit, OnDestroy {

  constructor(private nav: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }


  ngOnDestroy() {
    this.destroyScanner()
  }

  destroyScanner() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  }

  async openScanner() {
    await BarcodeScanner.checkPermission({ force: true });

    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan();
    if (result.hasContent) {
      let link = this.getLink(result.content)
      if (link == "")
        this.invalidAlert()
      else
        this.nav.navigateForward(link);
    }
    this.destroyScanner()
  };


  invalidAlert() {
    let alert = this.alertCtrl.create({
      header: "Errore!",
      subHeader: "Hai scannerizzato un codice non valido",
      buttons: [
        {
          text: 'OK'
        }
      ]
    });
    alert.then(alert => alert.present());
  }


  getLink(data: string){
    console.log(data);
    return data;
    }

 


   

 

}
