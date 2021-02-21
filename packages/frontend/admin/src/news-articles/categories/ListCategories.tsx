import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {NewsArticleLayout} from '../NewsArticlesLayout';
import {CreateCategoryModal} from './create-category-modal';
import {APIWrapper, articleService, setURL} from '@instinct-prj/frontend';

setURL('admin/news/categories', <ListCategories />);

export function ListCategories() {
  const [reload, setReload] = useState(0);

  function onCreation() {
    setReload(_ => _ + 1);
  }

  async function onDelete(categoryID: number) {
    try {
      await articleService.deleteCategoryByID(categoryID);
      toast.success(`Category ${categoryID} has been deleted`);
      setReload(_ => _ + 1);
    } catch {
      toast.error(`Category ${categoryID} could not be deleted at this time`);
    }
  }

  return (
    <NewsArticleLayout>
      <div className="row">
        <div className="col-6">
          <h2 style={{marginTop: 8}}>News Categories</h2>
        </div>
        <div className="col-6 text-right">
          <CreateCategoryModal onCreation={onCreation} />
        </div>
      </div>
      <APIWrapper promise={articleService.getAllCategories} params={reload}>
        {categories => (
          <div className="row" style={{maxHeight: 500, padding: 15}}>
            {categories?.map(category => (
              <div
                className="col-12"
                key={category.id}
                style={{
                  background: '#000B13',
                  borderBottom: `2px solid ${category.color}`,
                  padding: 15,
                  marginBottom: 15,
                }}
              >
                <h3>{category.name}</h3>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(category.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </APIWrapper>
    </NewsArticleLayout>
  );
}
