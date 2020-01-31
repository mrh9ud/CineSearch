import React from 'react'
import { Form, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchingSearchedMovies } from '../redux/actionCreators'

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        return (
            <React.Fragment>
                <Form className="search" onSubmit={ (event) => {
                        event.preventDefault()
                        this.props.fetchingSearchedMovies(this.state.searchTerm) 
                    }}>
                    <Input
                        id='search-form'
                        icon="search"
                        placeholder="Search..."
                        onChange={ this.handleChange }
                    />
                </Form>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchingSearchedMovies: (searchTerm) => dispatch(fetchingSearchedMovies(searchTerm))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)