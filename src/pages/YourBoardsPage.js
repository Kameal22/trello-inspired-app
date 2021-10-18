import React from 'react';

const YourBoardsPage = ({match}) => {
    const userId = match.params.userId;
    return (
        <div>
            <h1>Hello {userId}</h1>
            <h2>These are the boards that you are assigned to</h2>
        </div>
    );
};

export default YourBoardsPage;