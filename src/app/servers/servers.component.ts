import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  inputDefault = 'Please enter a username';
  displayUsername = "No username was created";
  userName = '';
  allowPasswordReset = false;
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2', 'hi'];

  constructor() { 
  	setTimeout(() => {
  		this.allowNewServer = true;
  	}, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
  	this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  	this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
  	console.log(event);
  	this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateUsername() {
  	this.displayUsername = "New username = " + this.userName;
  	this.allowPasswordReset = true;
  	this.serverCreated = true;
  }

  onUpdateUsername($event: Event) {
  	this.userName = (<HTMLInputElement>event.target).value;
  }

  onResetUsername() {
  	if (this.userName) {
  		this.userName = '';
  		this.allowPasswordReset = false;
  	}
  }

}
