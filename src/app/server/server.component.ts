import { Component } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent{
    serverStatus:string;
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    ngOnInit(){
    }
    getStyle(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}