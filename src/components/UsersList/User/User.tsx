import React from 'react';
import './User.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';

interface UserListI {
  avatar: string;
  url: string;
  login: string;
}

const UserData = ({avatar, url, login} : UserListI) => {
    const history = useHistory();
    const handleClickProfile = (login: string) => {
      history.push({
          pathname: `/profile/${login}`,
          state: { login: login }
      });
    }
    return (
        <div className="User">
            <List dense>
                <ListItem button onClick={() => handleClickProfile(login)}>
                  <ListItemAvatar>
                      <Avatar className="large" alt={login} src={avatar}/>
                  </ListItemAvatar>
                  <ListItemText
                    primary={login}
                  />
                  <ListItemSecondaryAction>
                    <Link href={url} target="_blank" underline="none" >
                        <Button variant="outlined">View on GitHub</Button>
                    </Link>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    )
}

export const User = React.memo(UserData)