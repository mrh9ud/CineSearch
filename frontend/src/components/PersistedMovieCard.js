import React from 'react'
import { Card, Image, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PersistedMovieModal from './PersistedMovieModal'

class WatchListFavoriteCard extends React.Component {
    render() {
        let { poster_path } = this.props.movie
        
        return (
                <Modal trigger={<Card> <Image src={poster_path} wrapped ui={false} /> </Card>}>
                    <Modal.Content image >
                        <PersistedMovieModal movie={this.props.movie}/>
                    </Modal.Content>
                </Modal>
        )
    }
}

const mapStateToProps = store => ({ currentUser: store.currentUser })

export default connect(mapStateToProps)(WatchListFavoriteCard)