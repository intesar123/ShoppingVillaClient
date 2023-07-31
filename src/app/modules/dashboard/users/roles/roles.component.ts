import { Component } from '@angular/core';
import { Role } from 'src/app/models/account/role';
import { AccountService } from 'src/app/services/account.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
  roles: Array<Role>;

  constructor(private service: AccountService, private message: MessageService) {
    this.roles = new Array<Role>();
  }

  ngOnInit() {
    this.getRoles();
  }

  getRoles() {
    this.service.getUserRoles().subscribe(r => {
      this.roles = r;
    })
  }

  deleteRole(id: number) {
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
      this.service.deleteRole(id).subscribe(r => {
        if (r == 1) {
          this.message.showMessage("Ok", "Deleted Successfully");
          this.getRoles();
        }
      })
    } else {
      text = "You canceled!";
      return;
    }
  }
}
