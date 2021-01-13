import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ForumService } from 'src/app/services/forum.service';
import { UserService } from 'src/app/services/user.service';


export interface DialogData {
}

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent implements OnInit {

  model: any = {};
  loading = false;
  loginData = null
  constructor(
    private dialogRef: MatDialogRef<SignInDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private forum$: ForumService,
    private user$: UserService
  ) {}

  ngOnInit(): void {
    
  }

  finish() {
    this.dialogRef.close(this.loginData);
  }

  signIn(username: string, password: string) {
    this.forum$.tryLogin(username, password).subscribe(
      {
        next: res => {
          this.user$.user = res;
          this.finish();
        },
        error: error => {
          console.log(error);
        } 
      }
    );
  }

  createAccount(){

  }

}
