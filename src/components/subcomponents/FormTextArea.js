import { Component } from "react";

export default class FormTextArea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		};
		this.handleChange = this.handleChange.bind(this);
	};
	handleChange(e) {
		this.setState({
			text: e.target.value,
		})
	};
	render() {
		const { handleChange } = this;
		const { readOnly, placeholder } = this.props;
		const { text } = this.state;
		return(
			<textarea className="FormTextArea" readOnly={readOnly} placeholder={placeholder} value={text} onChange={handleChange}/>
		);
	};
};