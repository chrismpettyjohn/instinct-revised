import { HashService } from '../common';
import { User } from '@instinct-prj/interface';
import { SessionService } from './session.service';
import { UserEntity, UserRepository } from '../database/user';
import { NewSessionDTO, UpdateEmailDTO, UpdatePasswordDTO, UpdatePreferencesDTO } from './session.dto';
export declare class SessionController {
    private readonly userRepo;
    private readonly sessionService;
    private readonly hashService;
    constructor(userRepo: UserRepository, sessionService: SessionService, hashService: HashService);
    createSession(newSession: NewSessionDTO): Promise<string>;
    createSSO(session: UserEntity): Promise<string>;
    changePreferences(session: UserEntity, preferencesDTO: UpdatePreferencesDTO): Promise<string>;
    changeEmail(session: UserEntity, emailDTO: UpdateEmailDTO): Promise<string>;
    changePassword(session: UserEntity, passwordDTO: UpdatePasswordDTO): Promise<string>;
    getSession(session: UserEntity): User;
}
