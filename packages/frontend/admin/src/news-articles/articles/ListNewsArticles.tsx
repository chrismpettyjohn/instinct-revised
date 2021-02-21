import {Link} from 'wouter';
import './ListNewsArticles.scss';
import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {NewsArticleLayout} from '../NewsArticlesLayout';
import {APIWrapper, articleService, Icon, setURL} from '@instinct-prj/frontend';

setURL('admin/news/articles', <ListNewsArticles />);

export function ListNewsArticles() {
  const [refresh, setRefresh] = useState(0);

  async function deleteArticle(articleID: number) {
    try {
      await articleService.deleteByID(articleID);
      setRefresh(_ => _ + 1);
      toast.success(`Article ${articleID} has been deleted`);
    } catch {
      toast.error(`Article ${articleID} could not be deleted at this time`);
    }
  }

  return (
    <NewsArticleLayout>
      <div className="row">
        <div className="col-6">
          <h2 style={{marginTop: 8}}>News Articles</h2>
        </div>
        <div className="col-6 text-right">
          <Link to="/admin/news/articles/create">
            <button className="btn btn-primary mt-2">
              <i className="fa fa-plus-square mr-2" />
              New
            </button>
          </Link>
        </div>
      </div>
      <APIWrapper params={refresh} promise={articleService.getAll}>
        {articles => (
          <div style={{maxHeight: 600, overflowY: 'scroll', padding: 10}}>
            {articles.map(_ => (
              <div className="admin-article row mb-2" key={_.id}>
                <div className="col-6">
                  <Link to={`/admin/news/articles/${_.id}`}>
                    <img
                      alt="article header"
                      src={_.thumbnailImage}
                      height={100}
                    />
                  </Link>
                </div>
                <div className="col-6 text-right">
                  <Link to={`/admin/news/articles/${_.id}`}>
                    <h3>{_.title}</h3>
                  </Link>
                  <div
                    onClick={() => deleteArticle(_.id)}
                    style={{cursor: 'pointer'}}
                  >
                    <Icon className="text-danger" type="trash" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </APIWrapper>
    </NewsArticleLayout>
  );
}
