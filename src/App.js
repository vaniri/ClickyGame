import React, { Component } from 'react';
import ImageCard from './components/Card';
import images from './images.json';

class App extends Component {

    state = {
        images
    };

    render() {
        return (
            <div className="App">
                {this.state.images.map((image, index) => 
                <ImageCard
                    key={index}
                    name={image.name}
                    url={image.url}
                />
                )}
            </div>
        )
    }
}

export default App