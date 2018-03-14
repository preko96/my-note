import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar'
import NoteList from  '../NoteList/NoteList'
import './NavPanel.css'

const initialState = {
	searchBarValue: ''
}

class NavPanel extends Component {
  
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    return (
      <div className='w-third navpanel br b--black-20'>
      	<SearchBar />
        <NoteList />
      </div>
      
      //<NewNote />
      //<Tags />
      //<NoteList />
    );
  }
}

export default NavPanel;