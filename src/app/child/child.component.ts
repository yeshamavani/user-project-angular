import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { UserModel } from '../model/user.model';
import { UserStore } from '../user-store';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private service: GetdataService, private store: UserStore<UserModel>) {  }

  ngOnInit(): void {

    this.store.seedData(this.service.getMockData1());
    //throw new Error('Method not implemented.');
  }

}
