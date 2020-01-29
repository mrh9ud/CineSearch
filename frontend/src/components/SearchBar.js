import React from 'react'
import { Form } from 'semantic-ui-react'

class SearchBar extends React.Component {
    render() {
        return (
            <Form onSubmit={null}>
                <Form.Input  placeholder='Search...' value={undefined} onChange={undefined} />
            </Form>
        )
    }
}

export default SearchBar