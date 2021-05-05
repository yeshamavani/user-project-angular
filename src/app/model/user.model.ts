import { NumberValueAccessor } from '@angular/forms';
import { Role } from '../model/role.model';

export interface IUserModel {

    uid: number;
    firstName: string;
    email: string;
    role: Role;
    middleName?: string; 
    lastName?: string;
    phone?: string;
    createdOn?: Date;
    modifiedOn?: Date;
    address: string;
    isEditable?: boolean
   
}

