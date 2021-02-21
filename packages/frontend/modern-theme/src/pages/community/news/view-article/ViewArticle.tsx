import './ViewArticle.scss';
import Moment from 'moment';
import {Link, useRoute} from 'wouter';
import React, {useContext} from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Avatar,
  Card,
  Container,
  Loading,
  RecentNews,
  setURL,
  useFetchArticleByID,
  Skeleton,
  MiniJumbotron,
  configContext,
  UserLayout,
  Icon,
} from '@instinct-prj/frontend';

setURL('community/news/:articleID', <ViewArticle />);

export function ViewArticle() {
  const {config} = useContext(configContext);
  const [match, params] = useRoute<{articleID: string}>(
    '/community/news/:articleID'
  );
  const article = useFetchArticleByID(params!.articleID);

  return (
    <UserLayout section="article">
      <Loading isLoading={false}>
        <Container>
          <div className="row">
            <div className="col-12">
              <Link to="/community/news">
                <div style={{cursor: 'pointer'}}>
                  <Icon className="fa-4x" type="caret-left" />
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <MiniJumbotron
                className="text-center"
                style={{
                  backgroundImage: `url('${
                    article?.headerImage ??
                    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_hween20.png'
                  }')`,
                  backgroundSize: '100%',
                }}
              >
                <h1>{article?.title ?? <Skeleton width={350} isLoading />}</h1>
                {article?.category ? (
                  <p>
                    {article?.category.name} -{' '}
                    {Moment.unix(article?.datePosted || 0).format(
                      'MMMM DD, YYYY'
                    )}
                  </p>
                ) : (
                  <Skeleton width={350} isLoading />
                )}
              </MiniJumbotron>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <Card style={{fontSize: 18}}>
                {article?.content ? (
                  <ReactMarkdown>{article.content}</ReactMarkdown>
                ) : (
                  <>
                    <Skeleton height={20} isLoading />
                    <Skeleton height={20} isLoading />
                    <Skeleton height={20} isLoading />
                    <Skeleton height={20} isLoading />
                  </>
                )}
                <div className="article-author mt-3">
                  <div className="row">
                    <div className="author-image">
                      <Skeleton
                        height={100}
                        width={64}
                        isLoading={!article?.author}
                      >
                        <Avatar look={article?.author?.figure} headOnly />
                      </Skeleton>
                    </div>
                    <div style={{marginLeft: 15, marginTop: 10}}>
                      <div className="author-details">
                        <div className="author-name">
                          <Skeleton width={250} height={22}>
                            {article?.author?.username}
                          </Skeleton>
                        </div>
                        <div className="author-function">
                          <Skeleton width={250} height={22}>
                            {article?.author?.rank?.name}
                          </Skeleton>
                        </div>
                      </div>
                    </div>
                    <div style={{marginTop: 8, marginLeft: 30}}>
                      <img src={`${config.swfBadgeURL}/ADM.gif`} />
                    </div>
                  </div>
                </div>
                <br />
              </Card>
            </div>
            <div className="col-4">
              <RecentNews />
            </div>
          </div>
        </Container>
      </Loading>
    </UserLayout>
  );
}
