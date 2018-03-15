import React, {Component} from 'react';
import './SearchBar.css'
import NoteImage from './plus.png'
import NoteImageOnHover from './plusOnHover.png'

class SearchBar extends Component {
  
  constructor() {
    super()
    this.state = {
      imageHover: false
    }
  }

  render() {
    return (
      <div className='flex items-center justify-between bb b--black-20'>
        <div className='ma2 inputContainer w-100'>
          <input className='pa1 pl4 boardingbox w-100 input-reset ba b--black-20 br4 black-50 f6' placeholder='All notes' type="text"/>
        </div>
        <div className='mr2'>
          <div className='boardingbox pointer contain grow'>
            <img src={(this.state.imageHover) ? NoteImageOnHover : NoteImage} alt=''
              onMouseOver={()=>this.setState({imageHover: true})}
              onMouseOut={()=>this.setState({imageHover: false})}/>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar;