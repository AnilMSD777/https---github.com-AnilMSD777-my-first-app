import { Component } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent{
buttonText:string = 'Button was not clicked';
ngOnInit(){
    
}
getName(){
    return 'this is from getName method';
}
}