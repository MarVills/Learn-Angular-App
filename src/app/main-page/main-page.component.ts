import { Component, OnInit, Inject } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SOLUTIONLINKS } from '../mock-solution-data';
import { Link } from '../mock-solution-data';
import { NgForm } from '@angular/forms';
import { CRUDdataService } from '../services/cruddata.service';
import { Observable,Subscription, interval } from 'rxjs';

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
  

  constructor(public dialog: MatDialog,private crudService: CRUDdataService) { }

  ngOnInit(): void {
    this.crudService.getDataList().subscribe((response)=>{
      console.log(response.data)
      for (var  data of response.data) {
        this.links.push(data)
      }
      console.log(this.links)

    })
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
      width: '250px',
      data: {prob: this.problem, sol: this.solution},
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    
  }
  onSubmit(linkData: any){
    console.log("something")
    this.crudService.addData(linkData).subscribe((result)=>{
      console.log(result)
    })
}

  onSelect(link: any): void {
    // this.selectedLink = link.imageLink;
    window.location.href = link.image_link;
    // console.log(link.image_link)
    // this.onDelete(link.id)
  }
  onDelete(id:number){
    this.crudService.deleteData(id).subscribe((response)=>{
      console.log(response)
    })
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
    private crudService: CRUDdataService,
  
  ) {}
  
  
  datas?:any
  onNoClick(): void {
    this.datas = this.dialogRef.close(this.dialogRef);
  }

  onSubmit(linkData: any){
    // console.log("something")
    // console.log(this.crudService.addData(linkData))
  }

  
}

