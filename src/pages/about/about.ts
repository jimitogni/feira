import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [
    ServiceProvider
  ]
})
export class AboutPage {

titulo : any[];
sala : any[];

  constructor(public navCtrl: NavController, public service:ServiceProvider) {

  }

  listarTrabalhos(){
    let url = "http://jimi.kozow.com:1234/crud/read.php";

    let serverResponse : Promise<any>;

    serverResponse = this.service.callServer(url);

    serverResponse.then(data => {
      console.log("Recebido " + JSON.stringify(data));
      this.parseJson(data);
    }).catch(err => {
      console.log("erro eh " + err);
    })
  }

parseJson(data){
  let jsonArray = data;

  this.titulo = [];
  this.sala = [];

  for (let i=0; i < jsonArray.length; i++){
    let jsonObject = jsonArray[i];
    this.titulo.push(jsonObject.titulo);
    this.sala.push(jsonObject.sala);

  }

}

}
