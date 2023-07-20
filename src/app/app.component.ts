import { Component } from '@angular/core';
import { AccountService } from './services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingVilla';

  constructor(private service: AccountService,private router:Router) {
    
  }

  ngOnInit()
  {
    if(this.service.isLoggedIn())
    {
      this.router.navigateByUrl("dashboard");
    }
    else{
        this.router.navigateByUrl("/");
    }
  }

}
