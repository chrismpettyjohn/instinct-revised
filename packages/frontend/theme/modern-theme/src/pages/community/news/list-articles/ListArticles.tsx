import Moment from 'moment';
import {Link} from 'wouter';
import {uniqBy} from 'lodash';
import {Article} from '@instinct-prj/interface';
import React, {ChangeEvent, useContext, useState} from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
} from '@material-ui/core';
import {UserLayout} from '../../../../components/layout/user';
import {configContext, setURL, useFetchAllArticles} from '@instinct-web/core';

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
      callback: (_: Article) =>
        _?.title.toLowerCase().indexOf(name.toLowerCase()) > -1,
    });
    setName(name);
    setCategory(undefined);
  }

  return (
    <UserLayout>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h5">Hotel News</Typography>
        </Grid>
        <Grid item xs={6} style={{textAlign: 'right'}}>
          <TextField
            label="Search by..."
            value={name}
            onChange={e => filterByTitle(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{marginTop: '2.5%'}}>
        {filteredArticles?.map(_ => (
          <Grid key={`article_${_.id}`} item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia image={_.headerImage} style={{height: 375}} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {_.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {_.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/community/news/${_.id}`}>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </UserLayout>
  );
}
