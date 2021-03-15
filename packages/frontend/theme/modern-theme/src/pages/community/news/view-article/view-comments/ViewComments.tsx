import React from 'react';
import Moment from 'moment';
import {Avatar as UserAvatar} from '@instinct-web/core';
import {ViewCommentProps} from './ViewComments.types';
import {DeleteComment} from './delete-comment/DeleteComment';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
  Avatar,
} from '@material-ui/core';
import {CreateCommentModal} from '../create-comment-modal/CreateCommentModal';

export function ViewComments({article, onChange}: ViewCommentProps) {
  return (
    <Card style={{background: '#272B34', color: 'white'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Comments
        </Typography>
        {article?.comments?.length === 0 && <p>There are no comments</p>}
        {article?.comments?.map(_ => (
          <Paper
            elevation={3}
            style={{
              background: '#1e2128',
              color: 'white',
              marginBottom: '2.5%',
              padding: 10,
            }}
            key={`comment_${_.id}`}
          >
            <div style={{display: 'flex'}}>
              <Avatar style={{height: 65, width: 55, padding: 4}}>
                <UserAvatar look={_.author.figure} />
              </Avatar>
              <div style={{marginLeft: '2.5%'}}>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="subtitle2">
                      {_.author.username} said:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} style={{textAlign: 'right'}}>
                    <DeleteComment comment={_} onDelete={onChange} />
                  </Grid>
                </Grid>
                <Typography variant="body2">{_.content}</Typography>
                <small>
                  <Typography variant="caption" gutterBottom>
                    Posted{' '}
                    {Moment.unix(_.timestamp).format('MM/DD/YYYY (hh:mmA)')}
                  </Typography>
                </small>
              </div>
            </div>
          </Paper>
        ))}
        <div style={{marginTop: '2.5%'}}>
          {article && (
            <CreateCommentModal article={article} onCreation={onChange} />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
