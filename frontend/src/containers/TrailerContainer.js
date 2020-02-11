import React from 'react'
import { connect } from 'react-redux'
import TrailerCard from '../components/TrailerCard'
import { Grid, Container } from 'semantic-ui-react'

class TrailerContainer extends React.Component {
    
    render() {
        if (this.props.trailerArray.length !== 0) {
            return (
                <Container>
                    <Grid columns={2} divided>
                        <Grid.Row stretched>
                            {this.props.trailerArray.map( trailer => { return <TrailerCard key={trailer.id} trailer={trailer} />})}
                        </Grid.Row>
                    </Grid>
                </Container>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = store => ({ trailerArray: store.trailerArray })

export default connect(mapStateToProps)(TrailerContainer)