import { Component } from "react";
import FormInput from "./subcomponents/FormInput";
import FormInputDate from "./subcomponents/FormInputDate";
import FormSubmit from "./subcomponents/FormSubmit";
import ItemDelete from "./subcomponents/ItemDelete";

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
				<FormSubmit readOnly={readOnly}/>
				<FormInput input="School" readOnly={readOnly}/>
				<FormInput input="Major" readOnly={readOnly}/>
				<FormInputDate readOnly={readOnly}/>
				<ItemDelete id={id} handleDelete={handleDelete}/>
			</form>
		);
	};
};