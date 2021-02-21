import {toast} from 'react-toastify';
import React, {useContext} from 'react';
import {Card} from '../../generic/card';
import CopyToClipboard from 'react-copy-to-clipboard';
import {sessionContext} from '../../../context/session';

export function Referral() {
  const {user} = useContext(sessionContext);
  const referralCode = `https://localhost:3001/referrals/${user!.username}`;

  function onCopy(): void {
    toast.info('Referral code has been copied to your clipboard!');
  }

  return (
    <Card header="Referral">
      <p>
        Invite your friends to earn diamonds! For each invite, you'll earn{' '}
        <b>5</b> diamonds
      </p>
      <div className="row">
        <div className="col-4 col-lg-2">
          <CopyToClipboard text={referralCode} onCopy={onCopy}>
            <button className="btn btn-block btn-dark">Copy</button>
          </CopyToClipboard>
        </div>
        <div className="col-8 col-lg-10" style={{paddingLeft: 0}}>
          <input
            className="form-control"
            disabled
            value={`http://localhost:3001/referrals/${user!.username}`}
          />
        </div>
      </div>
    </Card>
  );
}
