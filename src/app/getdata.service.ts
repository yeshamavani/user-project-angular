import { Injectable } from '@angular/core';
import { IUserModel } from './model/user.model';
import { Role } from './model/role.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  data: IUserModel[];
  // = [
  //   {"firstName":"Charlie","lastName":"Winwright","email":"ewinwright0@comcast.net","phone":"9692317258","role":Role.Admin,"createdOn":"19/12/2019","modifiedOn":"06/09/2020","address":"Mumbai"},
  //   {"firstName":"Jaclyn","middleName":"John","lastName":"Leneham","email":"eleneham1@deviantart.com","phone":"7551267312","role":Role.Subscriber,"createdOn":"18/12/2019","modifiedOn":"04/01/2021","address":"Mumbai"},
  //   {"firstName":"Dominga","middleName":"Mark","lastName":"De Hailes","email":"edehailes2@diigo.com","phone":"8557972805","role":Role.SuperAdmin,"createdOn":"25/09/2019","modifiedOn":"10/12/2020","address":"Mumbai"},
  //   {"firstName":"Caz","middleName":"Marchel","lastName":"Rushforth","email":"erushforth3@google.ru","phone":"1646814502","role":Role.Admin,"createdOn":"08/10/2019","modifiedOn":"14/12/2020","address":"Mumbai"},
  //   {"firstName":"Thorn","middleName":"Ted","lastName":"Murney","email":"emurney4@hostgator.com","phone":"8389272726","role":Role.Admin,"createdOn":"05/08/2019","modifiedOn":"31/07/2020","address":"Mumbai"},
  //   {"firstName":"Colman","middleName":"Ross","lastName":"Derby","email":"ederby5@geocities.jp","phone":"1251308677","role":Role.Subscriber,"createdOn":"01/11/2018","modifiedOn":"09/09/2020","address":"Mumbai"},
  //   {"firstName":"Dee dee","middleName":"Harvey","lastName":"Luttger","email":"eluttger6@surveymonkey.com","phone":"9117181067","role":Role.SuperAdmin,"createdOn":"30/04/2019","modifiedOn":"09/01/2021","address":"Mumbai"},
  //   {"firstName":"Ashby","middleName":"Nick","lastName":"Ramage","email":"eramage7@telegraph.co.uk","phone":"4393780342","role":Role.Admin,"createdOn":"17/04/2019","modifiedOn":"02/01/2021","address":"Mumbai"},
  //   {"firstName":"Granthem","middleName":"Tom","lastName":"Throssell","email":"ethrossell8@icio.us","phone":"4682418815","role":Role.Subscriber,"createdOn":"24/05/2018","modifiedOn":"22/08/2020","address":"Mumbai"},
  //   {"firstName":"Rey","middleName":"Ross","lastName":"Emmison","email":"eemmison9@nationalgeographic.com","phone":"1698160584","role":Role.SuperAdmin,"createdOn":"04/08/2019","modifiedOn":"10/03/2021","address":"Mumbai"}
  // ];  

  constructor(private http: HttpClient) { }

  getMockData() {

    let data2: IUserModel[] = this.data.map((row) => {
      return { ...row };
    });
    return data2;
  }

  getUserData(): Observable<any> {

    const headers = { 'content-type': 'application/json', 'referer': 'localhost' };
    let url: string = 'http://localhost:3000/users';
    return this.http.get(url, { 'headers': headers });

  }

  createUser(record: IUserModel) {

    const headers = { 'content-type': 'application/json', 'referer': 'localhost' };
    let url: string = 'http://localhost:3000/users';
    delete record.isEditable;
    delete record.uid;
    let body = record;
    return this.http.post(url, body, { 'headers': headers });
  }

  deleteUser(x: number) {
    //let id: string = x.toString();
    const headers = { 'content-type': 'application/json', 'referer': 'localhost' };
    let url: string = 'http://localhost:3000/users' + '/' + x.toString();
    return this.http.delete(url, { 'headers': headers });

  }

  updateUser(record: IUserModel) {
    const headers = { 'content-type': 'application/json', 'referer': 'localhost' };
    let url: string = 'http://localhost:3000/users' + '/' + record.uid.toString();
    delete record.isEditable;
    delete record.uid;
    let body = record;
    return this.http.patch(url, body, { 'headers': headers });
  }

}
