import { Component } from "react";
import '../../styles/FormSubmit.scss'
import uniqid from 'uniqid';

export default class FormSubmit extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		const { readOnly } = this.props;
		const text = (readOnly == true) ? 'edit' : 'done';
		const id = uniqid();
		return(
			<div className="FormSubmit">
				<button id={id} type="submit"> 
					<span className="material-icons">{text}</span>
				</button>
				{/* <label htmlFor={id}>{text}</label> */}
			</div>
		);
	};
};