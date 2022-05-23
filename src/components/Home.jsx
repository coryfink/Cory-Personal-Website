import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/source-code-pro";
import AnimatedText from 'react-animated-text-content';
import AboutMe from "./AboutMe";
import {Button} from "react-bootstrap";
import {useRef} from "react";
require('typeface-bebas-neue')

function Home() {
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView()
    return (
        <div className="main-wrapper">
            <div className="App">
                <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-sm-6">
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
                        duration={0.8}
                        includeWhiteSpaces={true}
                    >
                        CORY FINK
                    </AnimatedText>
                </div>
                    <div className="col-sm-6">
                    <AnimatedText
                        className="App-subheader body-font"
                        type="words"
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="lights"
                        interval={0.2}
                        duration={0.8}
                        includeWhiteSpaces={false}
                    >
                        programmer, designer, innovator, thinker, creator, engineer.
                    </AnimatedText>
                </div>
                </div>
                </div>
                <Button onClick={executeScroll} className="btn-primary mt-5">learn more</Button>
                <div className="marg-bottom pb-5" ref={myRef}>
                    <AboutMe />
                </div>
            </div>
        </div>
    );
}

export default Home;
