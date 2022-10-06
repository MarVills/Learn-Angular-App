import { Component, OnInit, Inject } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  showFiller = false;
  filmIcon = faFilm;
  animal?: string ;
  name?: string ;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  gotoFb(page: String){
    if(page === "facebook"){
      window.location.href ='https://facebook.com';
    }
    switch (page) {
      case 'facebook':
        window.location.href ='https://facebook.com';
          break;
      case 'twitter':
        window.location.href ='https://twitter.com';
          break;
      case 'instagram':
        window.location.href ='https://instagram.com';
          break;
      case 'tiktok':
        window.location.href ='https://tiktok.com';
          break;
      case 'telegram':
        window.location.href ='https://telegram.com';
          break;
      case 'linkedin':
        window.location.href ='https://linkedin.com';
          break;
      default:
          console.log("No url for this page!");
          break;
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
openDialog: any;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

