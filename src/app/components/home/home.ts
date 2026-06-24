import { Component, OnDestroy, OnInit } from '@angular/core';
import { Notification } from '../notification';
import { filter, map, Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { decreaseCounter, increaseCounter } from '../../store/counter.action';
import { CountSelect, doubleCount } from './store/counterChange/count.select';
import { decreament, Increament } from './store/counterChange/count.action';
@Component({
  selector: 'app-home',
  imports: [AsyncPipe,],
  templateUrl: './home.html',
  styleUrl: './home.css',

})
export class Home implements OnInit ,OnDestroy{
  subsscribtion !:Subscription
  count$:Observable<number>
doubleCount$:Observable<number>
constructor(private _note: Notification, private store: Store<{ changeValue: number,doubleCount:number }>) {

  this.count$ = store.select(CountSelect)
this.doubleCount$=store.select(doubleCount)
}

  ngOnInit(): void {
    this.subsscribtion =this._note.getNotifications().pipe(filter(msg=>msg.includes("you"))).subscribe({
      next:(notification)=>{
        console.log(notification)},
        error:(err)=>{console.log(err)},
        complete:()=>{"notification completed"}

    });
  }
  ngOnDestroy(): void {
    this.subsscribtion.unsubscribe()
  }
  increasevalue(){
    this.store.dispatch(Increament({value:2}))
  }
  decreaseValue(){
    this.store.dispatch(decreament({value:2}))
  }
}


