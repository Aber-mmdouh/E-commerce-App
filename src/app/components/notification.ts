import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Notification {
  notification!:string[]
  constructor(){
    this.notification =[
      "you have unread message",
      "people reacting on your post",
      "",
      "Mo sent you message"
    ]
  }
  getNotifications():Observable<string>{
    let counter = 0
    return new Observable<string>((observer)=>{
    let intervalId = setInterval(()=>{
if (this.notification[counter]==""){return observer.error("empty notifaction")

}
if(counter==this.notification.length){
  return observer.complete()
}
        observer.next(this.notification[counter])
        counter ++;
      },2000);
      //
  return{unsubscribe: ()=> clearInterval(intervalId)
    }});
  }
}
