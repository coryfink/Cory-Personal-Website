import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/source-code-pro";
import {Card, Button} from "react-bootstrap";

require('typeface-bebas-neue')

function AboutMe() {
    return (
        <Card>
            <Card.Header className="body-text lt-white">About Me</Card.Header>
            <Card.Body className="white">
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default AboutMe;
