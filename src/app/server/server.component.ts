import { Component } from "@angular/core";

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})
export class ServerComponent{
    inputText:string = 'initial value';
    inputText2:string = 'initial value 2';
ngOnInit(){
}
onInputChange(event:any){
    this.inputText = event.target.value;
}
getName(){
    return 'this is from getName method';
}
}