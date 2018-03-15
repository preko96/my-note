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
			<div className='flex'>
				<div className={'ph2 pv4 b--black bg-black-20 edge' + ((mouseover && !active ) ? ' bg-light-blue' : '') + (active ? ' bg-blue' : '')}></div>
				<div className=	{'pl3 note w-100 pv3 pointer' + ((mouseover && !active ) ? ' bg-washed-blue' : '') + (active ? ' bg-lightest-blue' : '')}
					onMouseOver={this.onMouseOverlap}
					onMouseOut={this.onMouseLeave}
					onClick={this.onClick}>
				
					<div className={'black-60' + (mouseover ? ' custom-grow' : '') + (active ? ' blue' : '')}>{this.name}</div>
					<div className={'black-30' + (mouseover ? ' custom-grow' : '')}>{this.desc}</div>
				</div>
			</div>
		)
	}
}

export default Note;