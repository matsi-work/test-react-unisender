import React from 'react';
import './Profile.css';
import { useHistory } from 'react-router-dom';
import { useFetchUsers } from '../api/useFetchUsers';
import { getDateFormat } from '../utils/getDateFormat';
import Avatar from '@material-ui/core/Avatar';


const ProfileList = () => {
    const history: any = useHistory();
    const {loading, error, profile} = useFetchUsers(1, history.location.state.login);

    if (profile?.created_at) {
        return (
            <div className="Profile">
                <Avatar src={profile.avatar_url} className="large" />
                <div className="info">
                    <h2 className="name">{profile.name}</h2>
                    <p>{profile.location}</p>
                    <p className="created">{getDateFormat(profile.created_at)}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="loading">
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error. Try Refreshing.</h1>}
        </div>
    );
}

export const Profile = React.memo(ProfileList);