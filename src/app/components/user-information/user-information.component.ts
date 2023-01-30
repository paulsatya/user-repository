import { IUser } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { UsersRepositoryService } from './../../service/users-repository.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  public usersArray: IUser[] = [];
  constructor(private userService: UsersRepositoryService) { }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(
      (user) => this.usersArray = user
    );
    console.log('users', this.usersArray);

  }

}
