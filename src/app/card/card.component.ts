import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() myData={
  type:"FREE",
  title:"$0",
  sub:"/month",
  users:"Single User",
  storage:"5GB",
  public_projects:["Unlimited Public Projects",false],
  access:"Community Access",
  private_projects:["Unlimited Private Projects",false],
  phone_support:["Dedicated Phone Support",false],      
  subdomain:["Free Subdomain",false],      
  status_reports:["Monthly Status Reports",false],
  }
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
