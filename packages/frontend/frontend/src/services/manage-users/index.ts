import {ManageUsersService} from './ManageUsers.types';
import {ManageUsersServiceImplementation} from './ManageUsers';

export const manageUsersService: ManageUsersService = new ManageUsersServiceImplementation();
