export interface NewForumReplyDTO {
  content: string;
}

export type UpdateForumReplyDTO = Partial<NewForumReplyDTO>;
