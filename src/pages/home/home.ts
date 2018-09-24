import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    ServiceProvider
  ]
})
export class HomePage {

public listaResultados = new Array<any>();

  responseTxt : any;

  constructor(public navCtrl: NavController, public service: ServiceProvider) {

  }

  showTable(){
    this.service.readTable().subscribe(data =>
              {
                let response = (data as any);
                let retorno = JSON.stringify(response);
                this.responseTxt = retorno;

                console.log(retorno);
              }, error => {
                console.log(error);
              }
    );
  }

  showTable2(){
    this.service.readTable().toPromise().then(data =>
              {
                this.responseTxt = "" + JSON.stringify(data);

              }
    );
  }

  addTable(c, n, o){
    this.service.escreveTabela(c, n, o).then(data =>
              {
              console.log("Eu recebi: " + JSON.stringify(data));
              this.responseTxt = "" + JSON.stringify(data);

              }
    );
  }

}
