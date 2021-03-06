import { Component } from "react";
import FormSubmit from "./subcomponents/FormSubmit";
import FormTextArea from "./subcomponents/FormTextArea";
import '../styles/Summary.scss';


export default class Summary extends Component {
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
			<form className="Summary" onSubmit={toggleEdit}>
				<FormTextArea readOnly={readOnly} placeholder={'Enter Summary Here.'}/>
				<FormSubmit readOnly={readOnly}/>
			</form>
		);
	};
};