import { Component } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent{
name:string = 'myServer';
getName(){
    return 'this is from getName method';
}
}