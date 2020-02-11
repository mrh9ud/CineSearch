import React from 'react'
import { Header, Grid, Segment, Embed, Divider } from 'semantic-ui-react'

class TrailerCard extends React.Component {

    render() {
        let { key, name, site } = this.props.trailer

        return (
            <Grid.Column>
                <Divider hidden />
                <Header inverted>{name}</Header>
                    <iframe 
                        width="360" 
                        height="300" 
                        src={key} 
                        frameborder="0" >
                    </iframe>
                <p>{site}</p>
            </Grid.Column>
        )
    }
}

export default (TrailerCard)