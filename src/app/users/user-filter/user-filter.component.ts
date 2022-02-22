import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {Role} from "../role.model";

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html'
})
export class UserFilterComponent implements OnInit {

  roles: Role[];
  selectedRoles: Role[];
  isLoading: boolean = false;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
      this.roles = this.userService.roles;

  }

}
