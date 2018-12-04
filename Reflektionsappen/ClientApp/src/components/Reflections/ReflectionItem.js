import React, { Component } from 'react';

class ReflectionItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
          title: this.props.data.title,
          text: this.props.data.text
        };     
      }

    render() {

            return (
                <div className="card-layout">
                    <div className="card-layout__box">
                        <h2>{this.state.title}</h2>
                        <div>{this.state.text}</div>
                    </div>    
                </div>
            ); 
    }
}

export default ReflectionItem;