import React from 'react';
import Invaders from './Invaders';

export default class DynamicDivGenerator extends React.Component {
    state = {
        id: [0],
        upOrDown: true
    };

    componentWillMount() {
        this.handleUpOrDown();
    }

    handleUpOrDown = () => {
        setInterval(() => {
            console.log('running')
            const idLength = this.state.id.length;
            if (this.state.upOrDown === true) {
                this.setState((prevState) => ({
                    id: this.state.id.concat(idLength)
                }));
                if (idLength >= 50) {
                    this.setState(() => ({
                        upOrDown: false
                    }));
                }
            } else {
                this.setState((prevState) => ({
                    id: this.state.id.slice(0, -1)
                }))
                if (idLength === 1) {
                    this.setState(() => ({
                        upOrDown: true
                    }));
                }
            };
        }, 40)
    }

    render() {
        return (
            <div className='main-container'>
            <Invaders id={this.state.id} upOrDown={this.upOrDown} handleUpOrDown={this.handleUpOrDown} />
            </div>
        );
    };
};