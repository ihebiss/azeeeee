import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/product-service.service';

@Component({
  selector: 'app-add-product-image',
  templateUrl: './add-product-image.component.html',
  styleUrls: ['./add-product-image.component.css']
})
export class AddProductImageComponent implements OnInit{

  id : any;
  fileToUpload?: File;

  constructor(private productservice : ProductServiceService,private router: Router,private route : ActivatedRoute) {
  }



  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.fileToUpload = inputElement.files[0];
    }
  }


  onUpload() {
    if (!this.fileToUpload) {
      alert('No file selected please upload an image first !!');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', this.fileToUpload);
  
    this.productservice.uploadImage(this.id , formData).subscribe();
    this.reloadComponent();
  }
  
  reloadComponent(): void {
    const currentRoute = this.router.url.split('?')[0];
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/cardProduct']);
      
    });
  }

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
}

}
