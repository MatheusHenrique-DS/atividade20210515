import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages=[
    { title:'Botões', url:'/botoes', icon:'albums' },
    { title:'Alerta', url:'/alerta', icon:'warning' },
    { title:'Badges', url:'/badges', icon:'bookmark' },
    { title:'Cartões', url:'/cartao', icon:'card' },
    { title:'IMC', url:'/imc', icon:'barbell' },
    { title:'Trash', url:'/folder/Trash', icon:'trash' },
    { title:'Spam', url:'/folder/Spam', icon:'warning' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
