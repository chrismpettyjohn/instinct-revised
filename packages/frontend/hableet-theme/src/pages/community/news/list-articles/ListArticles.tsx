import './ListArticles.scss';
import Moment from 'moment';
import {Link} from 'wouter';
import {uniqBy} from 'lodash';
import {Article} from '@instinct-prj/interface';
import React, {useContext, useState} from 'react';
import {
  Card,
  configContext,
  MiniJumbotron,
  setURL,
  useFetchAllArticles,
  Icon,
  UserLayout,
} from '@instinct-web/core';

type NewsFilter = (article: Article) => boolean;

setURL('community/news', <ListArticles />);

export function ListArticles() {
  const {config} = useContext(configContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState<Number>();
  const [filter, setFilter] = useState<{callback: NewsFilter}>({
    callback: (_: Article) => true,
  });
  const articles: Article[] | undefined = useFetchAllArticles();
  const filteredArticles = articles?.filter(filter.callback);

  const categories =
    articles === undefined
      ? []
      : uniqBy(
          articles.map(_ => _.category),
          'id'
        );

  function filterByCategory(categoryID: number) {
    setFilter({
      callback:
        category === categoryID
          ? (_: Article) => true
          : (_: Article) => _?.category?.id === categoryID,
    });
    setCategory(category === categoryID ? undefined : categoryID);
    setName('');
  }

  function filterByTitle(name: string) {
    setFilter({
      callback: (_: Article) => _?.title.toLowerCase().indexOf(name) > -1,
    });
    setName(name);
    setCategory(undefined);
  }

  return (
    <UserLayout>
      <div className="page-content">
        <div className="row">
          <div className="col-12">
            <MiniJumbotron>
              <h1>{config.siteName} News</h1>
              <p>Check out the latest updates, events and announcements.</p>
            </MiniJumbotron>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <MiniJumbotron>
              <div className="row">
                <div className="col-6">
                  <input
                    className="form-control"
                    placeholder="Search for an article"
                    value={name}
                    onChange={e => filterByTitle(e.target.value.toLowerCase())}
                  />
                </div>
                <div className="col-6">
                  {categories.map(_ => (
                    <button
                      className="btn ml-2"
                      key={_.id}
                      style={{
                        borderColor: category === _.id ? _.color : '#0F416C',
                        color: _.color,
                      }}
                      onClick={() => filterByCategory(_.id)}
                    >
                      {_.name}
                    </button>
                  ))}
                </div>
              </div>
            </MiniJumbotron>
          </div>
        </div>
        <div className="hotel-news row">
          {filteredArticles?.map(_ => (
            <div className="col-6 mb-4" key={_.id}>
              <Link to={`/community/news/${_.id}`}>
                <div>
                  <Card
                    style={{
                      borderBottom: `2px solid ${_.category.color}`,
                      cursor: 'pointer',
                    }}
                  >
                    <div className="article-content">
                      <img
                        alt=""
                        src={_.thumbnailImage}
                        className="article-image"
                      />
                      <div className="ml-4">
                        <div className="article-title">{_.title}</div>
                        <div className="article-body">
                          Posted{' '}
                          <span>
                            {Moment(_.datePosted).format('MMMM DD, YYYY')}
                          </span>
                        </div>
                        <p>{_.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </Link>
            </div>
          ))}
          {articles && articles?.length === 0 && (
            <div className="col-12">
              <Card className="text-center">
                <Icon className="fa-4x" type="exclamation-triangle" />
                <p>No articles have been posted yet.</p>
              </Card>
            </div>
          )}
          {articles && articles?.length > 0 && filteredArticles?.length === 0 && (
            <div className="col-12">
              <Card className="text-center">
                <Icon className="fa-4x" type="exclamation-triangle" />
                <p>We couldn't find any articles that fit the criteria!</p>
              </Card>
            </div>
          )}
        </div>
      </div>
    </UserLayout>
  );
}
