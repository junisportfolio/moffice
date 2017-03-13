import React from 'react';
import BigText from '../../components/temp/BigText';

const Post = ({params}) => {
    return (
        <div>
            {<BigText>{params.id}</BigText>}
        </div>
    );
};

export default Post;