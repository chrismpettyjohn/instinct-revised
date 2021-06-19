import React, {useState} from 'react';
import {DeleteSectionButtonProps} from './DeleteSectionButton.types';
import {forumService, Icon, PermissionGuard} from '@instinct-web/core';

export function DeleteSectionModalButton({
  onChange,
  sectionID,
}: DeleteSectionButtonProps) {
  const [askConfirm, setConfirm] = useState(false);

  const [buttonIcon, buttonText] = askConfirm
    ? ['check-circle', 'Are You Sure?']
    : ['trash-alt', 'Delete Section'];

  async function onToggle() {
    if (!askConfirm) {
      setConfirm(true);
      return;
    }

    await forumService.deleteSection(sectionID);
    onChange();
  }

  return (
    <PermissionGuard permission="websiteManageForums">
      <span
        className="text-white"
        onClick={onToggle}
        style={{cursor: 'pointer'}}
      >
        <Icon type={buttonIcon} />
        {buttonText}
      </span>
    </PermissionGuard>
  );
}
