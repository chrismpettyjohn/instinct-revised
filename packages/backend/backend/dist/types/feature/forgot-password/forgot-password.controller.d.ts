import { ForgotPasswordDTO } from './forgot-password.dto';
import { ForgotPasswordService } from './forgot-password.service';
export declare class ForgotPasswordController {
    private readonly forgotPasswordService;
    constructor(forgotPasswordService: ForgotPasswordService);
    sendPasswordLink(email: string | undefined): Promise<string>;
    redeemPasswordLink(forgotPasswordDTO: ForgotPasswordDTO): Promise<string>;
}
