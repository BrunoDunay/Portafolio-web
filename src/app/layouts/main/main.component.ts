import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { AsideComponent } from "../aside/aside.component";

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, AsideComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
