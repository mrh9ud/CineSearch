import React from 'react'
import { Header, Grid, Divider } from 'semantic-ui-react'

class TrailerCard extends React.Component {

    render() {
        let { key, name, site } = this.props.trailer

        return (
            <Grid.Column>
                <Divider hidden />
                <Header inverted>{name}</Header>
                    <iframe
                        title={name}
                        width="360" 
                        height="300" 
                        src={key} 
                        frameBorder="0" >
                    </iframe>
            </Grid.Column>
        )
    }
}

export default (TrailerCard)