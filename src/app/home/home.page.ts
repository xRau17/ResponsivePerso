import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios: any;
  buscador: string = '';

  constructor(private httpClient: HttpClient) {
    
    this.usuarios = this.httpClient.get('https://raw.githubusercontent.com/xRau17/ResponsivePerso/main/MOCK_DATA.json');

  }

}
