import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  creationStatus: boolean = false;
  serverName: string = "";
  servers = ["test1", "test2"];
  title = "CodeSandbox";
  solid(event: any) {
    this.serverName = event.target.value;
    console.log(this.serverName);
  }
  createServer() {
    this.servers.push(this.serverName);
    this.creationStatus = true;
  }
}
