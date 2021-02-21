import { UserDTO } from '@instinct-prj/interface';
export declare class UserDTOClass implements UserDTO {
    username: string;
    email: string;
    password: string;
    recaptcha: string;
    betaCode?: string;
}
