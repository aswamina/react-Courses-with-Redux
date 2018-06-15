import React from 'react';

//var AuthorStore = require('../../stores/authorStore.jsx');
//var AuthorList = require('./authorList.jsx');

class AuthorsPage extends React.Component {
/*
    getInitialState: function() {
      return {
          authors: AuthorStore.getAllAuthors()
      };  
    },
    componentWillMount: function() {
        AuthorStore.addChangeListener(this._onChange);
    },
    componentWillUnMount: function() {
        AuthorStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState({authors: AuthorStore.getAllAuthors()});
    },
*/
    render() {
        return (
            <div>
                <h1>Authors</h1>
            </div>
        );
    }
}

export default AuthorsPage;
