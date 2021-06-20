import {useRoute} from 'wouter';
import React, {useContext} from 'react';
import {Card} from '../../../components/card/Card';
import {configContext, Icon, setURL} from '@instinct-web/core';
import {UserLayout} from '../../../components/layout/user';
import {CheckoutSection} from '../components/checkout-section/CheckoutSection';
import {MiniJumbotron} from '../../../components/mini-jumbotron/MiniJumbotron';

setURL('shop/packages/:packageID', <ViewPackage />);

export function ViewPackage() {
  const {config} = useContext(configContext);
  const [match, params] = useRoute('/shop/packages/:packageID');

  return (
    <UserLayout>
      <div className="page-content">
        <div className="row">
          <div className="col-12">
            <MiniJumbotron>
              <h1>Purchase Bronze VIP</h1>
              <p>
                You are about to purchase Bronze VIP. Upon successful payment,
                you will be immediately given VIP benefits.
              </p>
            </MiniJumbotron>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Card header="Benefits">
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
                      your VIP renews, you will have the ability to use the flag
                      me command again, for unlimited ability you must have
                      'GOLD VIP
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
                  Ability to attend & hangout in the VIP section of Nex official
                  event room.
                </li>
                <li>
                  Bigger prizes when participating & winning Nex Event Games
                </li>
              </ul>
              <div className="mt-4">
                <div className="p-4">
                  <h4>Complete Payment</h4>
                  <Icon type="lock" />
                  <span>
                    Your personal information is securely processed through
                    Stripe&trade; and cannot be viewed by our team in any way.
                  </span>
                </div>
                <CheckoutSection />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
