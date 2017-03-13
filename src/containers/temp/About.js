import React from 'react';
import { match } from 'react-router-dom';

const NoMatch = ({location}) => {
    return (
        <div>
           <h1>{location.pathname} 페이지는 존재하지 않습니다.</h1>
        </div>
    );
};

export default NoMatch;