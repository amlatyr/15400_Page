import React from 'react';
import posts from './posts'

export default class PostList extends React.Component {
    render () {
        console.log(posts);
        return (
            <div id="PostList">
                {posts.map(post => this.render_post(post))}
            </div>
        );
    }

    render_post(post) {
        return (
            <div className="post_elem">
                <div className="post_date">
                    <span>{post.date}</span>
                </div>
                <div className="post_link">
                    {post.active
                        ? <a href={post.link}>{post.name}</a>
                        : <span>{post.name}</span>
                    }
                </div>
            </div>
        );
    }

}
