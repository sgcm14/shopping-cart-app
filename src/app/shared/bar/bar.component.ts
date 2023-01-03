import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  userLog: any = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    if (localStorage.getItem("usuariosLogueado") === null) {
      return this.userLog;
    }
    else {
      this.userLog = JSON.parse(localStorage.getItem("usuariosLogueado")!);
    }
    return this.userLog;
  }

  logout() {
    this.router.navigate(['./login']);
  }
}
