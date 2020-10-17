import { Component, OnInit } from '@angular/core';

import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-search-inbox',
  templateUrl: './search-inbox.component.html',
  styleUrls: ['./search-inbox.component.css']
})
export class SearchInboxComponent implements OnInit {
  

  productName:string
  

  constructor(private msg: MessengerService) { }


  
  ngOnInit(): void {
  }

  handleAddToList(){
    // console.log(this.productName)
    this.msg.sendMsg(this.productName)
    this.productName = ''
  }

}
