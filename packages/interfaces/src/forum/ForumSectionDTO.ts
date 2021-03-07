export interface NewForumSectionDTO {
  title: string;
  description: string;
  icon: string;
}

export type UpdateForumSectionDTO = Partial<NewForumSectionDTO>;

export const exampleNewForumSectionDTO: NewForumSectionDTO = {
  title: '',
  description: '',
  icon: '',
};
