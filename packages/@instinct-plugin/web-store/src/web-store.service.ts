import Stripe from 'stripe';
import {Injectable} from '@nestjs/common';
import {ConfigRepository, UserEntity} from '@instinct-api/database';

@Injectable()
export class WebStoreService {
  constructor(private readonly configRepo: ConfigRepository) {}

  async getCustomer(
    user: UserEntity
  ): Promise<Stripe.Customer | Stripe.DeletedCustomer> {
    const stripeAPI = await this.getStripe();
    return user.stripeCustomerID
      ? stripeAPI.customers.retrieve(user.stripeCustomerID)
      : stripeAPI.customers.create({name: user.username, email: user.email});
  }

  async createInvoice(
    user: UserEntity,
    description: string,
    amount: number
  ): Promise<Stripe.Invoice> {
    const stripeAPI = await this.getStripe();
    const customer = await this.getCustomer(user);
    return stripeAPI.invoices.create({description, customer: customer.id});
  }

  private async getStripe() {
    const config = await this.configRepo.getConfig();
    return new Stripe(config.stripeSecretKey, {
      apiVersion: '2020-08-27',
    });
  }
}
