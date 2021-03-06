import React, {useContext} from 'react';
import {Card} from '../../components/card/Card';
import {UserLayout} from '../../components/layout/user';
import {configContext, setURL} from '@instinct-web/core';
import {MiniJumbotron} from '../../components/mini-jumbotron/MiniJumbotron';
import {ShopPackage} from './shop-package/ShopPackage';

setURL('shop', <ShopHome />);

export function ShopHome() {
  const {config} = useContext(configContext);

  return (
    <UserLayout>
      <div className="page-content">
        <div className="row">
          <div className="col-12">
            <MiniJumbotron>
              <h1>{config.siteName} Shop</h1>
              <p>
                Welcome to the shop! Here you can purchase account upgrades and
                additional credits to help support our hotel!
              </p>
            </MiniJumbotron>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Card header="VIP Packages">
              <ShopPackage title="Bronze VIP" icon="poop">
                <ul>
                  <li>Given 10,000 Credits</li>
                  <li>Given 1,000 Diamonds</li>
                  <li>Given 1,000 Duckets</li>
                  <li>Bronze VIP badge</li>
                  <li>Bronze VIP Catalog</li>
                  <li>Special Discord Role</li>
                  <li>Special Chat Bubble</li>
                  <li>Pull command (:pull x)</li>
                  <li>Push command (:push x)</li>
                  <li>Limited Custom wardrobe color palette</li>
                  <li>20 daily respect & pet scratches</li>
                  <li>
                    Ability to change your name with (:flagme) command
                    <ul>
                      <li>
                        Note: This is limited, you can only do flagme once, when
                        your VIP renews, you will have the ability to use the
                        flag me command again, for unlimited ability you must
                        have 'GOLD VIP
                      </li>
                    </ul>
                  </li>
                  <li>Additional credits every 20 minute cycle (500 extra)</li>
                  <li>
                    Additional duckets & diamonds every 20 minute cycle (200
                    extra)
                  </li>
                  <li>::hug x and :kiss x emotes</li>
                  <li>
                    Ability to attend & hangout in the VIP section of Nex
                    official event room.
                  </li>
                  <li>
                    Bigger prizes when participating & winning Nex Event Games
                  </li>
                </ul>
              </ShopPackage>
            </Card>
          </div>
          <div className="col">
            <Card header="Previous Transactions">
              <p>You don't have any previous transactions.</p>
            </Card>
            <Card header="Security Notice">
              <p>
                All transactions are securely process through Stripe&trade;.
              </p>
              <p>
                We do not have access to your card details at any point during
                your transaction and you are secured by the Stripe team. All
                transaction references at Stripe are AES-256 encrypted to
                protect your data at all times. You can read more about Stripe's
                security practices by going{' '}
                <a
                  href="https://stripe.com/docs/security/stripe"
                  target="_blank"
                >
                  here
                </a>
                .
              </p>
            </Card>
            <Card>
              <b>Note:</b>
              <p>
                If you have any problems with your transaction, please contact
                our staff team.
              </p>
              <p>
                We have a no refund policy and chargebacks will result in a
                subsequent IP ban.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
