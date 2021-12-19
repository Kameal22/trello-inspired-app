import React from 'react';
import BoardList from "../components/Board/BoardList/BoardList";
import PageTitle from "../components/PageTitle";

const AllBoardsPage = ({userId}) => {
    const text = userId ? "Subscribed boards" : "All boards";
    return (
        <div>
            <PageTitle text={text}/>
            <BoardList userId={userId}/>
        </div>
    );
};

export default AllBoardsPage;