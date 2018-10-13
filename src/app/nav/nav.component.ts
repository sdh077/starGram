import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddpostComponent } from '../addpost/addpost.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private dialog:MatDialog, ) { }

  ngOnInit() {
  }


  addpost() {
    const dialogRef = this.dialog.open(AddpostComponent, {
      data:{ },
      height: '90%', 
      width: '90%'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });

  }

}
