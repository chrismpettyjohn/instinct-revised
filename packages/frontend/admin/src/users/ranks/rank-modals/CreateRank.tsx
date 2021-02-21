import React from 'react';
import {toast} from 'react-toastify';
import {RankDTO} from '@instinct-prj/interface';
import {Icon, rankService} from '@instinct-prj/frontend';
import {RankEditor} from '../rank-editor/RankEditor';

export function CreateRankModal() {
  async function onSave(rank: RankDTO): Promise<void> {
    await rankService.create(rank);
    toast.success(`Rank ${rank.name} has been created`);
    window.location.reload();
  }

  return (
    <RankEditor onSave={onSave}>
      <button className="btn btn-dark">
        <Icon type="plus-circle mr-2" />
        New
      </button>
    </RankEditor>
  );
}
