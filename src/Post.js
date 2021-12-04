import PropTypes from 'prop-types';
import React from 'react';


export default function Post({body, author}) {
    return (<div class = "Post">
        <p>Body: {body} </p>
        <p>Author: {author} </p>
    </div>)
}

Post.propTypes = {
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}