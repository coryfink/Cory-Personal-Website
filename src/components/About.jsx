import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/source-code-pro";
import AnimatedText from "react-animated-text-content";
import {Button} from "react-bootstrap";
require('typeface-bebas-neue')

function About() {
    return (
        <div className="main-wrapper">
            <div className="App">
                <AnimatedText
                    className="App-header"
                    type="words"
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="lights"
                    interval={0.01}
                    duration={0.5}
                    includeWhiteSpaces={true}
                >
                    ABOUT ME
                </AnimatedText>
                <div className="App-subheader">
                   Lets get started
            </div>
            </div>
        </div>
    );
}

export default About;
