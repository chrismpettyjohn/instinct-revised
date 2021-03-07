export interface NewForumPostDTO {
  title: string;
  content: string;
}

export type UpdateForumPostDTO = Partial<NewForumPostDTO>;

export const exampleNewForumPostDTO: NewForumPostDTO = {
  title: '',
  content: '',
};
