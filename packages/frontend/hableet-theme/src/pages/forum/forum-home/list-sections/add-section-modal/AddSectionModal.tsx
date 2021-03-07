import React from 'react';
import {forumService, Icon} from '@instinct-web/core';
import {NewForumSectionDTO} from '@instinct-prj/interface';
import {AddSectionModalProps} from './AddSectionModal.types';
import {SectionWizard} from '../../../components/section-wizard/SectionWizard';

export function AddSectionModal({onChange}: AddSectionModalProps) {
  async function onSubmit(sectionDTO: NewForumSectionDTO) {
    await forumService.createSection(sectionDTO);
    onChange();
  }

  return (
    <SectionWizard header="Create Section" onSubmit={onSubmit}>
      <button className="btn btn-outline-secondary">
        <Icon type="plus-circle" />
        Section
      </button>
    </SectionWizard>
  );
}
