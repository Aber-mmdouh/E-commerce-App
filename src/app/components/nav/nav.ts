import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { UserAuth } from '../../services/user-auth';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { languageAction } from '../../store/language/lang.action';
import { counterSelector } from '../../store/counter.select';
import { increaseCounter } from '../../store/counter.action';
import { selectLang } from '../../store/language/lang.select';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit {
  isUserlogged!:boolean
  counter$ :Observable<number>
  language$:Observable<string>
  currentlang!:string
  authentication=signal(false)
  private destroyREf=inject(DestroyRef)
  constructor(private _userauth:UserAuth,
    private store:Store<{counter:number,Language:string}>
  ){

    this.counter$ =store.select(counterSelector)
    this.language$ =this.store.select(selectLang)
    this.language$.subscribe((val)=>{
      this.currentlang=val
    })
  }
  ngOnInit() {
const subscription=this._userauth.user.subscribe((user)=>
this.authentication.update(()=>!user?false:true))
this.destroyREf.onDestroy(()=>subscription.unsubscribe())
  }

count(){
  this.store.dispatch(increaseCounter())
}
}
