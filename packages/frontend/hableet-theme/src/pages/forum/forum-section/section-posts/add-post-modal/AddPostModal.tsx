import {useLocation} from 'wouter';
import React, {useContext} from 'react';
import {forumService, Icon} from '@instinct-web/core';
import {NewForumPostDTO} from '@instinct-prj/interface';
import {sectionContext} from '../../section-context/SectionContext';
import {PostWizard} from '../../../components/post-wizard/PostWizard';

export function AddPostModal() {
  const location = useLocation();
  const {id} = useContext(sectionContext);

  async function onSubmit(postDTO: NewForumPostDTO) {
    const newPost = await forumService.createPost(id, postDTO);
    location.push(`/forum/sections/${id}/posts/${newPost.id}`);
  }

  return (
    <PostWizard header="Create Post" onSubmit={onSubmit}>
      <button className="btn btn-outline-secondary">
        <Icon type="plus-circle" />
        Post
      </button>
    </PostWizard>
  );
}
