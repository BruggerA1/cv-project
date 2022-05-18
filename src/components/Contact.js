import { Component } from "react";
import FormInput from "./subcomponents/FormInput";
import FormSubmit from "./subcomponents/FormSubmit";
import FormTitle from "./subcomponents/FormTitle";
import '../styles/Contact.scss'
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
				<FormTitle id={'title-contact'} title={'Connect'}/>
				<FormSubmit readOnly={readOnly}/>
				<div className="contact-wrapper">
				<span className="material-icons">phone</span>
				<FormInput input="Phone" readOnly={readOnly}/>
				</div>
				<div className="contact-wrapper">
					<span className="material-icons">email</span>
					<FormInput input="Email" readOnly={readOnly}/>
				</div>
				<div className="contact-wrapper">
					<span className="material-icons">public</span>
					<FormInput input="url" readOnly={readOnly}/>
				</div>

			</form>
		);
	};
};