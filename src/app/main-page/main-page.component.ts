import { Component, OnInit, Inject } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SOLUTIONLINKS } from '../mock-solution-data';
import { Link } from '../mock-solution-data';

export interface DialogData {
  problem: string;
  solution: string;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  showFiller = false;
  filmIcon = faFilm;
  problem?: string ;
  solution?: string ;
  links = SOLUTIONLINKS;
  selectedLink?: Link;
  tempMap:{[K: string]: string[]}={};

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  gotoFb(page: String){
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
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: {prob: this.problem, sol: this.solution},
    
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.tempMap["problem"].push(result.problem);
      // this.tempMap["solution"].push(result.solution);
      // console.log(result);
      // console.log(result);
      console.log('The dialog was closed');
      // this.problem = result;
      // console.log(result.get())
      // console.log(result.sol)
    });
    
  }

  onSelect(link: Link): void {
    // this.selectedLink = link;
    window.location.href = link.solution;
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
  
  
  datas?:any
  onNoClick(): void {
    datas:this.dialogRef.close(this.dialogRef);
    console.log(this.datas)
  }
}

