import {ForgotPasswordDTO} from './forgot-password.dto';
import {ForgotPasswordService} from './forgot-password.service';
import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Query,
} from '@nestjs/common';

@Controller('session/forgot-password')
export class ForgotPasswordController {
  constructor(private readonly forgotPasswordService: ForgotPasswordService) {}

  @Post()
  async sendPasswordLink(
    @Query('email') email: string | undefined
  ): Promise<string> {
    if (!email) {
      throw new BadRequestException('Email must be specified');
    }

    await this.forgotPasswordService.generatePasswordKey(email);
    return 'A link to reset your password has been emailed to you.';
  }

  @Post('redeem')
  async redeemPasswordLink(
    @Body() forgotPasswordDTO: ForgotPasswordDTO
  ): Promise<string> {
    if (forgotPasswordDTO.password !== forgotPasswordDTO.passwordAgain) {
      throw new BadRequestException('Your passwords must match');
    }

    await this.forgotPasswordService.redeemPasswordToken(
      forgotPasswordDTO.token,
      forgotPasswordDTO.password
    );
    return 'Your password has been updated';
  }
}
