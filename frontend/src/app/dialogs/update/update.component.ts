import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})

export class UpdateComponent implements OnInit {
  
  updateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UpdateComponent>,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.updateForm = this.fb.group({
      compoundName: new FormControl(this.data && this.data.compoundName ? this.data.compoundName : '', [
        Validators.required,
      ]),
      compoundDescription: new FormControl(
        this.data && this.data.compoundDescription ? this.data.compoundDescription : '',
        [Validators.required]
      ),
    });
  }
  
  updateCompound(){
    console.log(this.updateForm.value)
    this.apiService.updateCompound(this.data.id, this.updateForm.value).subscribe((res:any)=>{
      this.dialogRef.close(true);
    })
  }
}