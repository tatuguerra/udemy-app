import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "Server was nerver created";
  serverName = "Test Server";
  constructor() { 
    setTimeout(()=> {this.allowNewServer = true}, 3000)
  }
  
  ngOnInit(): void {
  }

  onServerCreation(){
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }
  onUpdateServerName(event:any){
    console.log(event);
    // this.serverName = (<HTMLInputElement>event.target).value;
    this.serverName = event.target.value;
  }
}
