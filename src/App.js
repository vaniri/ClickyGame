import React, { Component } from 'react';
import images from './images.json';
import shuffle from './utils.js';
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
import ImageCard from './components/card/Card';
import './style.css'


class App extends Component {
    state = {
        images: images.map(img => ({ ...img, clicked: false, shake: false })),
        userScore: 0,
        text: ""
    };


    changeScore = index => {
        this.setState(state => {
            let clickImage = state.images[index];
            if (clickImage.clicked === false) {
                clickImage.clicked = true;
                state.images.forEach(img => { img.shake = false; });
                state.userScore++;
                state.text = "Correct";
                shuffle(state.images);
            } else {
                state.images.forEach(img => {
                    img.clicked = false;
                    img.shake = true;
                });
                state.userScore = 0;
                state.text = "Incorrect";
            }
            return state;
        });
    }

    render() {
        return (
            <div className="App">
                <NavBar
                    text={this.state.text}
                    userscore={this.state.userScore}
                />
                <Header />
                <div id="image_container">
                    {this.state.images.map((image, index) =>
                        <ImageCard
                            changeScore={this.changeScore}
                            key={index}
                            index={index}
                            name={image.name}
                            url={image.url}
                            shake={image.shake}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default App