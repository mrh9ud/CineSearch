import React from 'react'
import { Card, Image, Modal } from 'semantic-ui-react'
import MovieCardModal from './MovieCardModal'

class MovieCard extends React.Component {
    render() {
        let {  poster_path } = this.props.movie

        return (
            <Modal trigger={<Card> <Image src={poster_path} wrapped ui={false} /> </Card>}>
                <Modal.Content image >
                    <MovieCardModal movie={this.props.movie}/>
                </Modal.Content>
            </Modal>
        )
    }
}

export default MovieCard