import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
validateForm!: FormGroup; 
  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      password: [null, [Validators.required]],
      email: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.AuthService.login(this.validateForm.value).subscribe((data)=>{
        localStorage.setItem('user', JSON.stringify(data));
         setTimeout(() => {
          this.router.navigateByUrl('/admin');
        }, 1000)
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
