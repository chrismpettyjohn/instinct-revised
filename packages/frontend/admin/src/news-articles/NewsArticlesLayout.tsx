import React from 'react';
import {Link, useLocation} from 'wouter';
import {
  AdminLayout,
  Card,
  Children,
  Container,
  Icon,
  Jumbotron,
} from '@instinct-prj/frontend';

export function NewsArticleLayout({children}: {children: Children}) {
  const [location] = useLocation();

  function getHeader() {
    return (
      <ul className="nav nav-tabs">
        <Link to="/admin/news/articles">
          <li
            className={
              location === '/admin/list-articles/articles'
                ? 'nav-link active'
                : 'nav-link'
            }
            style={{cursor: 'pointer'}}
          >
            <Icon className="mr-0" type="newspaper" />
          </li>
        </Link>
        <Link to="/admin/news/categories">
          <li
            className={
              location === '/admin/list-articles/categories'
                ? 'nav-link active'
                : 'nav-link'
            }
            style={{cursor: 'pointer'}}
          >
            <Icon className="mr-0" type="comments" />
          </li>
        </Link>
      </ul>
    );
  }

  return (
    <AdminLayout permission="websiteManageNews">
      <Jumbotron style={{background: '#263238'}} title="Hotel ListArticles">
        <p>Manage your hotel's articles.</p>
      </Jumbotron>
      <Container>
        <Card header={getHeader()}>{children}</Card>
      </Container>
    </AdminLayout>
  );
}
