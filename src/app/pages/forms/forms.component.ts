import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private files: any=FileList;
  public imagePath;
  imgURL: any[]=[];
  public message: string;
 
  preview(event) {

    this.files = event.target.files; 

    this.imgURL=[];

    // if (files.length === 0)
    //   return;

    // var mimeType = files[0].type;
    // if (mimeType.match(/image*/) == null) {
    //   this.message = "Only images are supported.";
    //   return;
    // }

    for (let index = 0; index < this.files.length; index++) {
      
      const element = this.files[index];

      this.ReadElement(element);
    }
  }

  ReadElement(element){
    var reader = new FileReader();
    //  this.imagePath = files;
    reader.readAsDataURL(element); 
    reader.onload = (__event) => { 
      this.imgURL.push(reader.result); 
      console.log(reader.result);
    }
  }

}
