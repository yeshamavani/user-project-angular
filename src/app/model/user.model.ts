import { NumberValueAccessor } from '@angular/forms';
import { Role } from '../model/role.model';

export interface IUserModel {

    id: number;
    firstName: string;
    email: string;
    role: Role;
    middleName?: string;
    lastName?: string;
    phone?: string;
    createdOn?: string;
    modifiedOn?: string;
    address: string;
    isEditable?: boolean
   
}

