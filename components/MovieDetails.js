import { Container, Row, Col } from "react-bootstrap"

export default function MovieDetails(props){
    return(
        
        <Col>
            <Row>
                {props.movie?.poster ? <Col md>
                <img src={props.movie?.poster} alt="poster" className="w-100"/><br/><br/>
                </Col> : <></>}
                <Col md>
                    <strong>Directed By:</strong> {props.movie?.directors.join(', ')}<br/><br/>
                    <p>{props.movie?.fullplot}</p>
                    <strong>Cast:</strong> {props.movie?.cast.join(', ')} <br/><br/>
                    <strong>Awards:</strong> {props.movie?.awards.text}<br/>
                    <strong>IMDB Rating:</strong> {props.movie?.imdb.rating} ({props.movie?.imdb.votes})
                </Col>

            </Row>
        </Col>
        
    )
}