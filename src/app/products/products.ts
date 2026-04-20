import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';
import { ProductService } from '../services/products';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true,
})
export class Products implements OnInit{
  products! : any;

  constructor(private productService : ProductService) {
    //l'injection de depandances

  }

  ngOnInit(){
    this.getAllProducts();
  }

  getAllProducts(){

    this.productService.getAllProducts().subscribe({
      next : resp=> {
        this.products=resp;
      } ,
      error : err => {
        console.log(err);
      } ,
    });
  }

  handleDelete(product: any){
    let v=confirm('etes vous sure de vouloire supprimer ? ');
    if(v==true){
      this.productService.deleteProduct(product.id).subscribe({
        next : value=> {
          this.getAllProducts();
         } ,
        error : err => {
          console.log(err);
        } ,
      });

    }
  }
}
