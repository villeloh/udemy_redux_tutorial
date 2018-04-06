import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    renderList() { 
        
        return this.props.books.map(book => {

            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        }); 
    }

    render() {
        return(
            <ul className="col-sm-4 list-group">
                {this.renderList()}            
            </ul>
        );
    }
}

function mapStateToProps(state) {

    return {

        books: state.books // this.props.books exists now (retrieved from application state)
    };
}

export default connect(mapStateToProps)(BookList);
