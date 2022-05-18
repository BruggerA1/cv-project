import { Component } from "react";
import FormInput from "./subcomponents/FormInput";
import FormInputDate from "./subcomponents/FormInputDate";
import FormSubmit from "./subcomponents/FormSubmit";
import ItemDelete from "./subcomponents/ItemDelete";
import FormTextArea from "./subcomponents/FormTextArea";
import '../styles/Job.scss';

export default class Job extends Component {
	constructor(props) {
		super(props);
		this.state = {
			readOnly: true,
		};
		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this)
	};
	toggleEdit(e) {
		e.preventDefault();
		this.setState(state => ({
			readOnly: !state.readOnly,
		}));
	};
	handleDelete(e) {
		this.props.handleDelete(e.target.id);
	};
	render() {
		const { toggleEdit, handleDelete} = this;
		const { readOnly } = this.state;
		const { id } = this.props;
		return(
			<form className="Job" onSubmit={toggleEdit} id={id}>
				<div className="button-wrapper">
					<FormSubmit readOnly={readOnly}/>
					<ItemDelete id={id} handleDelete={handleDelete}/>
				</div>
				<div className="job-input-wrapper">
					<FormInput input="Position" readOnly={readOnly}/>
					<FormInput input="Company" readOnly={readOnly}/>
					<FormInput input="Location" readOnly={readOnly}/>
				</div>
				<div className="job-date-wrapper">
					<div className="start-wrapper">
						<label> Start: </label>
						<FormInput input="Date Start" readOnly={readOnly}/>

					</div>
					<div className="end-wrapper">
						<label> End: </label>
						<FormInput input="Date End" readOnly={readOnly}/>
					</div>
				</div>
				<FormTextArea readOnly={readOnly} placeholder={'Description of Job.'}/>
			</form>
		);
	}
};