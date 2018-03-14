import React, { Component } from 'react';
import './Note.css'

const initialState = {
	active: false,
	mouseover: false
}

class Note extends Component {
	constructor({name, desc, onClick}) {
		super();

		this.onClick = () => onClick(this);
		this.name = name;
		this.desc = desc;

		this.state = initialState;
	}

	onMouseOverlap = () => {
		this.setState({mouseover: true})
	}

	onMouseLeave = () => {
		this.setState({mouseover: false})
	}

	render() {
		const {active, mouseover} = this.state;
		return(
			<div className=	{'ph4 pv3 pointer bb shrink' + (active ? ' b--blue' : ' b--black-20')} 
				onMouseOver={this.onMouseOverlap}
				onMouseOut={this.onMouseLeave}
				onClick={this.onClick}>
			
				<div className={'black-70' + (mouseover ? ' customgrow' : '') + (active ? ' blue' : '')}>{this.name}</div>
				<div className={'black-30' + (mouseover ? ' customgrow' : '')}>{this.desc}</div>
			</div>
		)
	}
}

export default Note;