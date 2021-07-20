'use strict'

import { Component, OnInit } from '@angular/core';
import Ws from "@adonisjs/websocket-client";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ws:any;
  chat:any;
  mensajes:string[] = [];

  msg_user: string = "John Doe";
  msg_20:number=0;
  msg_12:number=0;
  msg_100:number=0;
  msg_10:number=0;
  msg_8:number=0;
  msg_6:number=0;
  msg_4:number=0;
  msg_2:number=0;


  ngOnInit(): void {
    this.ws = Ws("ws://0.0.0.0:8080/", {
      path: "adonis-ws"
    });

    this.ws.connect();
    this.chat = this.ws.subscribe("chat");

    this.chat.on("message", (data:any) => {
      this.mensajes.push(data);
    })
  }

  enviarMensaje(){

    var sep: string = "--";
    this.chat.emit("message", sep);
    this.mensajes.push(sep);
    
    var msg= {
      20:this.msg_20,
      100:this.msg_100,
      12:this.msg_12,
      10:this.msg_10,
      8:this.msg_8,
      6:this.msg_6,
      4:this.msg_4,
      2:this.msg_2
    }


    console.log(msg);
    
    var list: string[] = [];
    this.chat.emit("message", list);
    for (var [key, value] of Object.entries(msg)) {

      if (value < 0){
          alert("You cant roll a negative number of D"+Number(key)+ " dices.")

            }else {

              if (value >= 1) {
                for (let i = 0; i < value; i++) {

                    let math = Math.floor(Math.random() * Number(key)) + 1 ;
                    let date = new Date().toISOString().substr(11, 8);
                    let results = this.msg_user + " has rolled a D" + Number(key) + " dice was rolled and it gets: " + math + " : " + String(date);
                    
                    this.chat.emit("message", results)
                    this.mensajes.push(results);
                  
                };
              }
            }
    };
    
    console.log(this.msg_user + list)
    
  }

  limpiarMensaje(){
    this.msg_20 = 0
    this.msg_100 = 0
    this.msg_10 = 0
    this.msg_12 = 0
    this.msg_8 = 0
    this.msg_6 = 0
    this.msg_4 = 0
    this.msg_2 = 0
  }

}

