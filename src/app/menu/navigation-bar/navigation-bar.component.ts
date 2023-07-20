import { Component } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  isToShowRightMenu=false;

  constructor(private loaderService:LoaderService) {
    
  }
  
  ngOnInit(){
    this.loaderService.isToShowRightMenu.subscribe(x=>this.isToShowRightMenu=x);
  }

  showHideMenu(){
    this.loaderService.showHideRightMenu(!this.isToShowRightMenu);
  }
}
