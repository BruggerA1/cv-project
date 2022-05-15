import { Component } from "react";

export default class FormTextArea extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		const { readOnly, placeholder } = this.props;
		return(
			<textarea readOnly={readOnly} placeholder={placeholder}/>
		);
	};
};