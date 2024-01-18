import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestBookService {
  commentiString: any=[];
  commenti: any=[];

  constructor() { }


  addComment(comment: any){
    let comments = [];
    if(localStorage.getItem('Comments')){
      comments = JSON.parse(localStorage.getItem('Comments') as string);
      comments = [comment, ...comments];
    }else{
      comments = [comment];
    }
    localStorage.setItem('Comments', JSON.stringify(comments));
  }

  getComments(){
    if(localStorage.getItem('Comments')){
      this.commentiString=JSON.parse(localStorage.getItem('Comments') as string);
      for (let i = 0; i < this.commentiString.length; i++) {
        this.commenti.push(JSON.parse(this.commentiString[i]));
      }
      return this.commenti;
    }else{
      return [];
    }
  }
}
