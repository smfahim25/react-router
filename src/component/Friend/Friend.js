import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;
    const navigate = useNavigate();
    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <Link to={'/friend/' + id}>Show Detail</Link>
            <button onClick={showFriendDetail}>{username}: {id}</button>
        </div>
    );
};

export default Friend;