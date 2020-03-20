import React, { Component } from 'react';
import ImageCard from './components/Card';
import images from './images.json';
import shuffle from './utils.js'


class App extends Component {
    state = {
        images: images.map(img => ({ ...img, clicked: false, shake: false })),
        userScore: 0
    };


    changeScore = index => {
        this.setState(state => {
            let clickImage = state.images[index];
            if (clickImage.clicked === false) {
                clickImage.clicked = true;
                state.images.forEach(img => { img.shake = false; });
                state.userScore++;
                shuffle(state.images);
            } else {
                state.images.forEach(img => { 
                    img.clicked = false;
                    img.shake = true;
                });
                state.userScore = 0;
            }
            return state;
        });
    }

    render() {
        return (
            <div className="App">
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
        )
    }
}

export default App