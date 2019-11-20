import {EventEmitter} from '@angular/core';
import {INotification} from './typings/notification';
import {environment} from '../environments/environment';

export class SocketService {
  static notification$ = new EventEmitter<INotification>();
  static count = 0;
  socket;

  init(user_id) {
    const url = environment.backend_root;
    const data = {
      connectionConfig: {
        socket_key: user_id
      },
      imi_bot_middleware_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiVGhpcyBpcyBJTUkgQk9UIG1pZGRsZXdhcmUiLCJpYXQiOjE1Njc4ODc5MTAsImV4cCI6NDE1OTg4NzkxMH0.dYbMaf8HYMD5K532p7DpHN0cmru-JKMjst-WS9zi7u8'
    };
    this.socket = (window as any).io(url, {query: `data=${JSON.stringify(data)}`});
    this.socket.on('connect', () => {
      console.log('Client has connected to the server!');
      this.initAllEvents();
    });
  }

  createRandomString(length: number = 10) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  initAllEvents() {
    this.socket.on('preview', (data: INotification) => {
      debugger;
      SocketService.count++;
      SocketService.notification$.emit(data);
    });
  }

}
