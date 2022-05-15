import { Component } from "react";
import FormInput from "./subcomponents/FormInput";
import FormSubmit from "./subcomponents/FormSubmit";
import FormTitle from "./subcomponents/FormTitle";

export default class Contact extends Component {
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
	};
	render() {
		const { toggleEdit } = this;
		const { readOnly } = this.state;
		return(
			<form className="Contact" onSubmit={toggleEdit}>
				<FormTitle id={'title-contact'} title={'Contact'}/>
				<FormSubmit readOnly={readOnly}/>
				<FormInput input="Phone" readOnly={readOnly}/>
				<FormInput input="Email" readOnly={readOnly}/>
				<FormInput input="LinkedIn" readOnly={readOnly}/>
				<FormInput input="GitHub" readOnly={readOnly}/>
			</form>
		);
	};
};