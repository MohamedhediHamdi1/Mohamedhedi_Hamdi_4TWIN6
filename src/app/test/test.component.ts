import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  product={
    id:"dfuobdlkfbiosdgfz",
    name:"product 1",
    price:200,
    quantity:10,
    imgsrc:"/assets/mail.png"
  }

  color=""

  acheter(){
    this.product.quantity-=1
  }

  onColorChange(event:Event){
  this.color=(event.target as HTMLInputElement).value
  }

}
