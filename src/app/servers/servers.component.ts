import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  serversList=['Server1','Server2','Server3']
constructor(){
  

}
ngOnInit(){

}
buttonClicked(){
  this.serversList.push('Server');
}
}
