import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../app/getdata.service';
import { IUserModel } from './model/user.model';
import { UserStore } from '../app/user-store';
import { Role } from './model/role.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-proj';
  buttonText = 'Load Data';
  data: IUserModel[];
  tempData;
  constructor(private service: GetdataService, private store: UserStore<IUserModel>) { }

  loadData() {
    this.service.getUserData().subscribe((res) => {
      this.store.seedData(res);
      this.data = this.store.getRecords();
      this.buttonText = 'Reload Data';
    });

  }

  // reloadData() {

  //   this.store.seedData(this.service.getMockData());
  //   this.loadData();
  // }

  deleteRecord(id, index) {
    var userApproval = confirm("Please confirm to delete the selected row");
    if (userApproval) {
      //this.data = this.store.deleteOne(x);
      this.service.deleteUser(id).subscribe((res) => {
        alert("Record Deleted");
        this.store.deleteOne(index);
        this.data = this.store.getRecords();
      })
    }
  }

  cancelChanges(x) {
    const dataFromService: IUserModel[] = this.service.getMockData();
    // this.data[x] = dataFromService[x];

    this.data = this.store.cancelOrSaveChanges(dataFromService[x], x);
  }

  saveChanges(x) {

    let userId = this.data[x].uid;

    if (x == (this.data.length - 1)) {
        this.service.createUser(this.data[x]).subscribe((res) => {
        console.log(res);  
       const receivedData: IUserModel =  res as IUserModel;
        this.data[x].uid = receivedData.uid;        },
        (err) => {
          console.log("Error while adding new row");
          throw new Error(err);
        });

    } else {
        this.service.updateUser(this.data[x]).subscribe((res) => {
        this.data[x].uid = userId;
        this.data = this.store.updateData(this.data[x], x);
        //= this.store.getRecords();
      },
        (err) => {
          console.log("Error while updating the row");
          throw new Error(err);
        });

    }

  }

  addRow() {

    // initialise an empty row 
    // edit and chnage the default data, later save or cancel the changes

    const emptyRecord: IUserModel = {
      uid: 0,
      firstName: '',
      email: '',
      role: Role.Blank,
      middleName: '',
      lastName: '',
      phone: '',
      createdOn: new Date(),
      modifiedOn: new Date(),
      address: ''
    };

    this.data = this.store.createRecord(emptyRecord);
  }
}
