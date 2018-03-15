import React, { Component } from 'react';
import Note from '../../components/Note/Note'

//In the feature should get these things from the database of the active user.
const Notes = [ 
	{
		name: 'First',
		desc: 'first'
	},
	{
		name: 'Second',
		desc: 'second'
	},
	{
		name: 'Third',
		desc: 'third'
	},{
		name: 'Fourth',
		desc: 'fourth'
	}
]

class NoteList extends Component {
	
	constructor() {
		super()
		this.state = {
			activeNote: null
		}
	}

	onActiveNoteChange = (newNote) => {
		const {activeNote} = this.state
		activeNote.setState({'active': false},
			() => this.setState({activeNote: newNote},
				() => activeNote.setState({'active': true})
			)
		)		
	}

	handleClick = (note) => {
		const {activeNote} = this.state

		if(!activeNote) {
			this.setState({activeNote: note})
			note.setState({'active': true})
		}

		else if (activeNote !== note) {
			activeNote.setState({active: false}) 
			note.setState({active: true})
			this.setState({activeNote: note})
		}
	}

	render() {
		return (
			<div className='mt4 bt b--black-20'>
				{
					Notes.map((note, index) => {
					 	return <Note name={note.name} desc={note.desc} key={index} onClick={ this.handleClick.bind(this) }/>
					})
				}
			</div>
		)
	}
}

export default NoteList;