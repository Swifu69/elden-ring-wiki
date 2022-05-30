import Spinner from "react-bootstrap/Spinner";

function Loading(){
    return(
        <Spinner animation="border" role="status" className="mx-auto d-block">
            <span className="visually-hidden">cock and balls...</span>
        </Spinner>
    )
}

export default Loading;