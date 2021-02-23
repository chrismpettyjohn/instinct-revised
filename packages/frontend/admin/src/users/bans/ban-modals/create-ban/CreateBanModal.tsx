import React from 'react';
import {toast} from 'react-toastify';
import {BanEditor} from '../../ban-editor';
import {banService} from '@instinct-web/core';
import {UserBanDTO} from '@instinct-prj/interface';

export function CreateBanModal() {
  async function onSave(banDTO: UserBanDTO) {
    try {
      await banService.create(banDTO);
      toast.success(`User ${banDTO.userID} has been banned`);
    } catch {
      toast.error(`User ${banDTO.userID} could not be banned at this time`);
    }
  }

  return (
    <BanEditor onSave={onSave}>
      <button className="btn btn-dark">
        <i className="fa fa-plus-circle mr-2" />
        New
      </button>
    </BanEditor>
  );
}
