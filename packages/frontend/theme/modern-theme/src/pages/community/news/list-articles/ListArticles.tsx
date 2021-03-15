import {Link} from 'wouter';
import {Article} from '@instinct-prj/interface';
import React, {useState} from 'react';
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
import {setURL, useFetchAllArticles} from '@instinct-web/core';

type NewsFilter = (article: Article) => boolean;

setURL('community/news', <ListArticles />);

export function ListArticles() {
  const [name, setName] = useState('');
  const [filter, setFilter] = useState<{callback: NewsFilter}>({
    callback: (_: Article) => true,
  });
  const articles: Article[] | undefined = useFetchAllArticles();
  const filteredArticles = articles?.filter(filter.callback);

  function filterByTitle(name: string) {
    setFilter({
      callback: (_: Article) =>
        _?.title.toLowerCase().indexOf(name.toLowerCase()) > -1,
    });
    setName(name);
  }

  return (
    <UserLayout>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h5">Hotel News</Typography>
        </Grid>
        <Grid item xs={6} style={{textAlign: 'right'}}>
          <TextField
            fullWidth
            label="Search by..."
            value={name}
            onChange={e => filterByTitle(e.target.value)}
          />
          <Typography variant="body2">
            Showing {filteredArticles?.length} articles
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{marginTop: '2.5%'}}>
        {filteredArticles?.map(_ => (
          <Grid key={`article_${_.id}`} item xs={6}>
            <Card>
              <CardActionArea>
                <Link to={`/community/news/${_.id}`}>
                  <CardMedia image={_.headerImage} style={{height: 375}} />
                </Link>
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
