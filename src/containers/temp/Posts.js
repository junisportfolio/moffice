import React from 'react';
import BigText from '../../components/temp/BigText';
import PostLinks from '../../components/temp/PostLinks';

const Posts = ({children}) => {
    return (
        <div>
            <BigText>포스트</BigText>
            <PostLinks/>
            {children}
        </div>
        
    );
};

export default Posts;