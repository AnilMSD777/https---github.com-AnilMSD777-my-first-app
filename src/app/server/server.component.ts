import { Component } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent{
    buttonClicked:boolean=false;
    clicked(){
        this.buttonClicked = true;
    }
}