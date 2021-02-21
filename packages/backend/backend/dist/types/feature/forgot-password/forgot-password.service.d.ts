import { HashService } from '../../common';
import { EmailService } from '../../email/email.service';
import { ConfigRepository } from '../../database/config';
import { UserRepository } from '../../database/user';
import { UserForgotPasswordRepository } from '../../database/user';
export declare class ForgotPasswordService {
    private readonly userRepo;
    private readonly configRepo;
    private readonly hashService;
    private readonly emailService;
    private readonly forgotPasswordRepo;
    constructor(userRepo: UserRepository, configRepo: ConfigRepository, hashService: HashService, emailService: EmailService, forgotPasswordRepo: UserForgotPasswordRepository);
    generatePasswordKey(email: string): Promise<void>;
    redeemPasswordToken(token: string, newPassword: string): Promise<void>;
}
