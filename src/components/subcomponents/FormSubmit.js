import { Component } from "react";

export default class FormSubmit extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		const { readOnly } = this.props;
		const text = (readOnly == true) ? 'edit' : 'save';
		return(
			<button type="submit"> {text} </button>
		);
	};
};