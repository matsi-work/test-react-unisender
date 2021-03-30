import React, { useEffect, useState } from 'react';
import './UserList.css'

import Pagination from '@material-ui/lab/Pagination';
import { useFetchUsers } from '../api/useFetchUsers';
import {User} from './User/User';
import { useHistory } from 'react-router';

const UsersList = () => {
    const [page, setPage] = useState(Number(localStorage.getItem('page_id')));
    const { users, loading, error } = useFetchUsers(page);
    const history = useHistory();

    useEffect(() => {
        history.push('/page/' + page);
        localStorage.setItem('page_id', String(page));
    }, [history, page])

    return (
        <div className="UsersListBlock">
            <div className="UserList">
                {loading && <h1>Loading...</h1>}
                {error && <h1>Error. Try Refreshing.</h1>}
                {users.map((user: any) => {
                    return <User key={user.node_id} avatar={user.avatar_url} login={user.login} url={user.html_url} />
                })}
            </div>
            <Pagination 
                className="pagination"
                hideNextButton={true}
                hidePrevButton={true}
                onChange={(_, page: number) => setPage(page)}
                count={4}
                defaultPage={Number(localStorage.getItem('page_id'))}
                variant="outlined"
            />
        </div>
    )
}

export {UsersList};