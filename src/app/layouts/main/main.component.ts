import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { AsideComponent } from "../aside/aside.component";
import { StarfieldComponent } from "../../components/starfield/starfield.component";

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, AsideComponent, StarfieldComponent],
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './main.component.css'
})
export class MainComponent {

}
