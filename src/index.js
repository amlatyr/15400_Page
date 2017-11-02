import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header'
import PostList from './post_list'


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class Page extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <PostList />
            </div>
        )
    }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
