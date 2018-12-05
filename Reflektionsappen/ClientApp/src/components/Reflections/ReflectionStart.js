import React, { Component } from 'react'
import PhotoMia from './Photo'
import ReflectionStartHeader from './ReflectionStartHeader'
import ReflectionStartMessage from './ReflectionStartMessage'
import ReflectionStartButton from './ReflectionStartButton'
import ReflectionMenu from './ReflectionMenu'


export default class ReflectionStart extends Component {

  render() {
    return (
      <div className='reflection-start'>
        <PhotoMia/>
  
        <ReflectionStartHeader
            header={'Hej Anna'}/>
  
        <ReflectionStartMessage
            message={'Du har inte skrivit in några reflektioner för idag. Dina reflektioner sparas när dagen är slut.'}/>
  
        <ReflectionStartButton>
          {{
            header: 'Mindre bra - Lärdom',
            description: 'Lorem ipsum button 1'
          }}
        </ReflectionStartButton>
  
        <ReflectionStartButton>
          {{
            header: 'Bra - Stolt över',
            description: 'Lorem ipsum button 2'
          }}
        </ReflectionStartButton>
  
        <ReflectionStartButton>
          {{
            header: 'Hjälp - Jag behöver - Längtar efter',
            description: 'Lorem ipsum button 3'
          }}
        </ReflectionStartButton>
  
        <ReflectionStartButton>
          {{
            header: 'Glad för - Tacksam över',
            description: 'Lorem ipsum button 4'
          }}
        </ReflectionStartButton>
  
        <ReflectionMenu/>
      </div>
    )
  }
}

