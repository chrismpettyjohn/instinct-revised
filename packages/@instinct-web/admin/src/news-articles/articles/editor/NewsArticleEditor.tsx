import {Link} from 'wouter';
import {toast} from 'react-toastify';
import React, {useState} from 'react';
import MDEditor from '@uiw/react-md-editor';
import {Article} from '@instinct-prj/interface';
import {Card} from '../../../components/card/Card';
import {Jumbotron} from '../../../components/jumbotron/Jumbotron';
import {AdminLayout} from '../../../components/admin-layout/AdminLayout';
import {PreviewImage} from '../../../components/preview-image/PreviewImage';
import {
  Form,
  Icon,
  Input,
  Select,
  useFetchAllNewsCategories,
  Skeleton,
} from '@instinct-web/core';
import {
  defaultNewsArticleEditorState,
  NewsArticleEditorProps,
  NewsArticleEditorState,
} from './NewsArticleEdtitor.types';

export function NewsArticleEditor({
  defaultArticle,
  onSave,
}: NewsArticleEditorProps) {
  const categories = useFetchAllNewsCategories();
  const [state, setState] = useState<NewsArticleEditorState>({
    ...defaultNewsArticleEditorState,
    article: defaultArticle ?? defaultNewsArticleEditorState.article,
  });

  function setValue<K extends keyof NewsArticleEditorState>(
    key: K,
    value: NewsArticleEditorState[K]
  ): void {
    setState(_ => ({
      ..._,
      [key]: value,
    }));
  }

  function setArticleValue<K extends keyof Article>(
    key: K,
    value: Article[K]
  ): void {
    editArticle({
      [key]: value,
    });
  }

  function editArticle(article: Partial<Article>): void {
    setState(_ => ({
      ..._,
      article: {
        ..._.article,
        ...article,
      },
    }));
  }

  async function onSubmit() {
    setValue('showSpinner', true);

    try {
      await onSave({
        title: state.article.title,
        content: state.article.content,
        description: state.article.description,
        categoryID: state.article.category.id,
        headerImage: state.article.headerImage,
        thumbnailImage: state.article.thumbnailImage,
      });
      toast.success('Your changes have been saved');
      setValue('showSpinner', false);
    } catch {
      setState(_ => ({
        ..._,
        showError: true,
        showSpinner: false,
      }));
    }
  }

  return (
    <AdminLayout permission="websiteManageNews">
      <Jumbotron
        style={{
          background: '#263238',
          backgroundImage: `url(${state.article.headerImage})`,
          backgroundSize: '100%',
        }}
        title={state.article.title}
      >
        <p>{state.article.description}</p>
      </Jumbotron>
      <div className="page-content">
        <Link to="/admin/news/articles">
          <Icon className="text-white fa-2x" type="arrow-left" />
        </Link>
        <Card header="Editor">
          <Form className="" onSubmit={onSubmit}>
            <div className="mt-3" style={{padding: 2}}>
              <h4>Title</h4>
              <Input
                type="text"
                name="title"
                onChange={setArticleValue}
                value={state.article.title}
              />
            </div>
            <div className="mt-3" style={{padding: 2}}>
              <h4>Description</h4>
              <Input
                type="text"
                name="description"
                onChange={setArticleValue}
                value={state.article.description}
              />
            </div>
            <div className="mt-3" style={{padding: 2}}>
              <h4>Category</h4>
              <Skeleton isLoading={categories === undefined}>
                <Select
                  options={categories}
                  value={
                    categories?.find(_ => _.id === state.article.category.id) ??
                    null
                  }
                  getOptionLabel={(x: any) => x.name}
                  getOptionValue={(x: any) => `${x.id}`}
                  onChange={(_: any) => setArticleValue('category', _)}
                />
              </Skeleton>
            </div>
            <div className="mt-3" style={{padding: 2}}>
              <h4>
                Header
                <small>
                  <PreviewImage
                    className="ml-2"
                    image={state.article.headerImage}
                  />
                </small>
              </h4>
              <Input
                type="text"
                name="headerImage"
                onChange={setArticleValue}
                value={state.article.headerImage}
              />
            </div>
            <div className="mt-3" style={{padding: 2}}>
              <h4>
                Thumbnail
                <small>
                  <PreviewImage
                    className="ml-2"
                    image={state.article.thumbnailImage}
                  />
                </small>
              </h4>
              <Input
                type="text"
                name="thumbnailImage"
                onChange={setArticleValue}
                value={state.article.thumbnailImage}
              />
            </div>
            <div className="mt-3">
              <h4>Content</h4>
              <MDEditor
                value={state.article.content}
                onChange={(content: any) => editArticle({content})}
              />
            </div>
            <div className="row mt-3">
              <div className="col-6">&nbsp;</div>
              <div className="col-6 text-right">
                <button
                  className="btn btn-primary"
                  disabled={state.showSpinner}
                >
                  {state.showSpinner ? (
                    <i className="fa fa-spinner fa-spin" />
                  ) : (
                    'Save'
                  )}
                </button>
              </div>
            </div>
          </Form>
        </Card>
      </div>
    </AdminLayout>
  );
}
