import { Component } from "react";
import FormInput from "./subcomponents/FormInput";
import FormInputDate from "./subcomponents/FormInputDate";
import FormSubmit from "./subcomponents/FormSubmit";
import ItemDelete from "./subcomponents/ItemDelete";
import '../styles/School.scss'

export default class School extends Component {
	constructor(props) {
		super(props);
		this.state = {
			readOnly: true,
		};
		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	};
	toggleEdit(e) {
		e.preventDefault();
		this.setState(state => ({
			readOnly: !state.readOnly,
		}));
	}
	handleDelete(e) {
		this.props.handleDelete(e.target.id);
	}
	render() {
		const { toggleEdit, handleDelete} = this;
		const { readOnly } = this.state;
		const { id } = this.props;
		return(
			<form className="School" onSubmit={toggleEdit} id={id}>
				<div className="button-wrapper">
					<FormSubmit readOnly={readOnly}/>
					<ItemDelete id={id} handleDelete={handleDelete}/>
				</div>
				<FormInput className="school-school" input="School" readOnly={readOnly}/>
				<div className="school-wrapper">
					<FormInput className="school-major" input="Major" readOnly={readOnly}/>
					<FormInput className="school-date"  input="Year"readOnly={readOnly}/>
				</div>

			</form>
		);
	};
};