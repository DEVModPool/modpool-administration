import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {Role} from "../role.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html'
})
export class UserFilterComponent implements OnInit {

  roles: Role[];
  selectedRoles: Role[];
  isLoading: boolean = false;

  userFilterForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      roles: new FormControl([])
  })


  constructor(private userService: UsersService) { }

  ngOnInit(): void {
      this.roles = this.userService.getRoles();
  }

  onSearch() {
      this.userService.getUsers(this.userFilterForm.value);
  }
}
