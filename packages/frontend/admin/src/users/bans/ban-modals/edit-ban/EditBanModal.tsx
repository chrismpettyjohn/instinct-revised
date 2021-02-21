import Moment from 'moment';
import React from 'react';
import {toast} from 'react-toastify';
import {BanEditor} from '../../ban-editor';
import {UserBanDTO} from '@instinct-prj/interface';
import {Avatar, banService} from '@instinct-prj/frontend';
import {DeleteBanModal} from '../delete-ban/DeleteBan';
import {EditBanModalProps} from './EditBanModal.types';

export function EditBanModal({ban, onChange}: EditBanModalProps) {
  const defaultBan: UserBanDTO = {
    userID: ban.user.id,
    reason: ban.banReason,
    banStart: ban.banStart,
    banEnd: ban.banEnd,
  };

  async function onSave(banDTO: UserBanDTO) {
    try {
      await banService.updateByID(ban.id.toString(), banDTO);
      toast.success(`You have updated the ban on ${ban.user.username}`);
      onChange();
    } catch {
      toast.error(
        `User ${banDTO.userID}'s ban could not be updated at this time`
      );
    }
  }

  return (
    <div
      className="admin-article row mb-3"
      key={ban.id}
      style={{height: 100, width: '100%'}}
    >
      <div className="col-2">
        <Avatar look={ban.user.figure} headOnly />
      </div>
      <div className="col-10 text-right">
        <h3>{ban.user.username}</h3>
        <h5 style={{marginTop: -10}}>
          <b style={{fontWeight: 'bold'}}>Ban Expires:</b>{' '}
          {Moment.unix(ban.banEnd).format('MM/DD/YYYY (hh:mmA)')}
        </h5>
        <div className="row mr-2" style={{float: 'right'}}>
          <DeleteBanModal ban={ban} onDeletion={onChange}>
            <button className="btn btn-danger btn-sm mr-2">
              <i className="fa fa-trash" />
            </button>
          </DeleteBanModal>
          <BanEditor defaultBan={defaultBan} onSave={onSave}>
            <button className="btn btn-primary btn-sm">
              <i className="fa fa-pencil" />
            </button>
          </BanEditor>
        </div>
      </div>
    </div>
  );
}
