import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-about',
  imports: [RouterOutlet, RouterLinkWithHref,RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
