import { Component, OnInit, Inject } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SOLUTIONLINKS } from '../mock-solution-data';
import { Link } from '../mock-solution-data';
import { CRUDdataService } from '../shared/cruddata.service';
import { MainPageService } from './main-page.service';

export interface DialogData {
  name: string;
  solutionLink: string;
  price: string;
  isPublished: any;
  id: any;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class DashboardComponent implements OnInit {

  showFiller = false;
  filmIcon = faFilm;
  name?: string ;
  solutionLink?: string ;
  links = SOLUTIONLINKS;
  selectedLink?: Link;

  constructor(
    public dialog: MatDialog,
    private crudService: CRUDdataService , 
    private mainService: MainPageService,) { }
  ngOnInit(): void {
    this.mainService.fetchDataList()
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
  openAddSolutionDialog(): void {
    const addSolutionDialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {prob: this.name, sol: this.solutionLink},
    
    });
    addSolutionDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
   openSolutionDetailsDialog(link:any){
     this.mainService.fetchData(link).subscribe((response)=>{
      console.log(response)
      this.mainService.dataID = response.id
      const detailDialogRef = this.dialog.open(SolutionDetailDialog, {
        data: { name: response.name, solutionLink: response.image_link},
      });
       detailDialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
    });
  }

  onUpdate(data:any){
    return this.crudService.updateData(data.id, data).subscribe((response)=>{
      console.log(response)
      this.mainService.fetchDataList()
      
    });
  }

  
}

// ################################## add solution dialog ####################################

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  styleUrls: ['./main-page.component.css']
})
export class DialogOverviewExampleDialog {
openDialog: any;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private mainService: MainPageService,
  ) {}
  
  onNoClick(): void {
     this.dialogRef.close(this.dialogRef);
  }

  onSubmit(linkData: any){
    console.log("something")
    this.mainService.postData({
      "name": linkData.name,
      "image_link": linkData.image_link,
      "price": 0,
      "is_published": 0
    }).subscribe((result)=>{
      console.log(result)
      this.mainService.fetchDataList();
    })
  }
}

// ################################## solution details dialog ####################################

@Component({
  selector: 'solution-link-details',
  templateUrl: './solution-link-details.html',
  styleUrls: ['./main-page.component.css']
})
export class SolutionDetailDialog implements OnInit {
  
  links = SOLUTIONLINKS;
  openDialog: any;

  constructor(
    public dialogRef: MatDialogRef<SolutionDetailDialog>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData,
    private crudService: CRUDdataService,
    private mainService: MainPageService,) {}

  ngOnInit(): void {}
  
  onNoClick = (): void  => this.dialogRef.close(this.dialogRef);

  onFetchData(){
    this.links.splice(0);
    this.crudService.getDataList().subscribe((response)=>{
      console.log(response.data)
      for (var  data of response.data) {
        this.links.push(data)
         console.log(data)
      }})
  }

  onSubmit(linkData: any){
    return this.mainService.updateData(
      {
      "name": linkData.name,
      "image_link": linkData.image_link,
      "price": 0,
      "is_published": 0
      }
    ).subscribe((response)=>{
      console.log(response)
      this.onFetchData()});
  }
  onDelete(){
    this.mainService.deleteData().subscribe((response)=>{
      console.log(response);
      this.onFetchData()})
  }
  goToLink(data: any){
    if(data.substring(0,11)=="https://www"|| data.substring(0,10)=="http://www" || data.substring(0,7)=="http://" || data.substring(0,8)=="https://"){
      window.location.href = data
    }else{
      window.location.href = "https://www.google.com/search?q="+data;
    }
  }
}
