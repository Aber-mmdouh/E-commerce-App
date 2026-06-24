import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from "./components/products/products";
import { Footer } from './components/footer/footer';
import { Nav } from './components/nav/nav';
import { Order } from './components/order/order';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Init } from './components/home/store/counterChange/count.action';
import { selectLang } from './store/language/lang.select';
@Component({
  selector: 'app-root',
  imports: [Nav, Footer, RouterOutlet],
  templateUrl: './app.html',

  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('ECApp');
  dir :string="ltr"
  language$:Observable<string>
  constructor(private store:Store<{Language:string}>){
    this.language$ = this.store.select(selectLang)
    this.language$.subscribe((val)=>{
    this.dir=(val=="en")?"ltr":"rtl"})
  }
  ngOnInit() {
    this.store.dispatch(Init())
  }

}
