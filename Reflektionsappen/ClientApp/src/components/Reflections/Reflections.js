import React, { Component } from 'react'
import ReflectionItem from './ReflectionItem'

export default class Reflections extends Component {

  state = {
    data: {
      reflectionObjs: [
          {
            reflection1: {
                title: 'Good stuff',
                text: 'Perpetua efficiantur in quo, vix cu stet denique repudiandae, sonet zril te usu.',
                btnLabel: 'Happy'
            },
            reflection2: {
                title: 'Bad stuff',
                text: 'Efficiantur in quo, vix cu stet denique repudiandae, sonet zril te usu.',
                btnLabel: 'Sad'
            },
            reflection3: {
              title: 'Room for improvement',
              text: 'Efficiantur in quo, vix cu stet denique repudiandae, sonet zril te usu.',
              btnLabel: 'Optimistic'
          }
        }       
      ]
    }
  }  
  render() {
    return (
      <div className="content-layout">
        <ReflectionItem data={this.state.data.reflectionObjs[0].reflection1}></ReflectionItem>
        <ReflectionItem data={this.state.data.reflectionObjs[0].reflection2}></ReflectionItem>
        <ReflectionItem data={this.state.data.reflectionObjs[0].reflection3}></ReflectionItem>    
      </div>
    )
  }
}

