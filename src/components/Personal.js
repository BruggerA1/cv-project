import '../styles/Personal.scss'
import { Component } from "react";
import FormInput from "./subcomponents/FormInput";
import FormSubmit from "./subcomponents/FormSubmit";

export default class Personal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			readOnly: true,
		};
		this.toggleEdit = this.toggleEdit.bind(this);
	};
	toggleEdit(e) {
		e.preventDefault();
		this.setState(state => ({
			readOnly: !state.readOnly,
		}));
	}
	render() {
		const { toggleEdit } = this;
		const { readOnly } = this.state;
		return(
			<form className="Personal" onSubmit={toggleEdit}>
				{/* <FormTitle id={'title-personal'} title={'Personal'}/> */}
				<FormSubmit readOnly={readOnly}/>
				<div className='name'>
					<FormInput id='firstName' input="first" readOnly={readOnly}/>
					<FormInput id='lastName' input="last" readOnly={readOnly}/>
				</div>
				<FormInput input="title" readOnly={readOnly}/>
			</form>
		);
	};
};