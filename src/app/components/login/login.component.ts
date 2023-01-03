import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formInstance = new FormGroup({});

  user = [
    {
      username: "user_one",
      password: "123456",
      nombres_y_apellidos: "Usuario Número 1"
    },
    {
      username: "user_two",
      password: "987654",
      nombres_y_apellidos: "Usuario Número 2"
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    this.formInstance = new FormGroup({
      user: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });

  }

  textMayus(event: any) {
    let key;
    key = event.keyCode;
    key = String.fromCharCode(key);
    const regex = /[^A-Z]/;

    if (!regex.test(key)) {
      event.returnValue = false;
    }
  }

  addUser(us: any) {
    let userlog = []
    userlog.push(us);
    localStorage.setItem("usuariosLogueado", JSON.stringify(userlog));
  }

  login() {
    const data = {
      user: this.formInstance.get("user")!.value,
      password: this.formInstance.get("password")!.value,
    };



    if (data.user === this.user[0].username && data.password === this.user[0].password) {
      this.addUser(this.user[0]);
      this.router.navigate(['./products']);
    } else if (data.user === this.user[1].username && data.password === this.user[1].password) {
      this.addUser(this.user[1]);
      this.router.navigate(['./products']);
    }
  }

}
