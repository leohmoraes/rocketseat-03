import React, { Component } from 'react';

class TechList extends Component {
    state = {
        techs: [
            'Node.JS',
            'ReactJS',
            'React Native',
        ]
    };

    render() { //metodo obrigatorio
        console.log(this.state);

        return (
            <ul>
                <li>Node.JS</li>
                <li>ReactJS</li>
                <li>React Native</li>
            </ul>
        );
    }
}

export default TechList;
