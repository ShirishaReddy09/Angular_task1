import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular1';
  cards=[
    {
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
      status_reports:["Monthly Status Reports",false]
      },
    {
      type:"PLUS",
      title:"$9",
      sub:"/month",
      users:"5 Users",
      storage:"50GB",
      public_projects:["Unlimited Public Projects",true],
      access:"Community Access",
      private_projects:["Unlimited Private Projects",true],
      phone_support:["Dedicated Phone Support",true],      
      subdomain:["Free Subdomain",true],      
      status_reports:["Monthly Status Reports",false]
    },
    {
      type:"PRO",
      title:"$49",
      sub:"/month",
      users:"Unlimited Users",
      storage:"150GB",
      public_projects:["Unlimited Public Projects",true],
      access:"Community Access",
      private_projects:["Unlimited Private Projects",true],
      phone_support:["Dedicated Phone Support",true],      
      subdomain:["Unlimited Free Subdomains",true],      
      status_reports:["Monthly Status Reports",true],
    }
  ]


}
