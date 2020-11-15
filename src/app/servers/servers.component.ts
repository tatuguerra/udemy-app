import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "Server was nerver created";
  constructor() { 
    setTimeout(()=> {this.allowNewServer = true}, 3000)
  }
  
  ngOnInit(): void {
  }

  onServerCreation(){
    this.serverCreationStatus = "Server was created"
  }
}
