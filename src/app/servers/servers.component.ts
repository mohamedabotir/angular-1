import { Component } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styles: [
    `
      .Online {
        background: green;
      }
    `
  ]
})
export class serversComponent {
  serverID: number = 1234;
  status: String = "offline";
  constructor() {
    this.status = Math.random() > 0.5 ? "Online" : "offline";
  }
  getServerID() {
    return this.serverID;
  }
  getColor() {
    return this.status === "Online" ? "" : "red";
  }
}
