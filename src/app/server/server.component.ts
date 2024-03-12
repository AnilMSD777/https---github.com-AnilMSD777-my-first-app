import { Component } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent{
name:string = 'myServer';
buttonFlag:boolean = false;
ngOnInit(){
    setTimeout(() => {
        this.buttonFlag=true;
    }, 4000);
    
}
getName(){
    return 'this is from getName method';
}
}