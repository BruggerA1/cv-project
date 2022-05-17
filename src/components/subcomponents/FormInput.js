import { Component } from "react";

export default class FormInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		};
		this.handleChange = this.handleChange.bind(this);
	};
	handleChange(e) {
		this.setState({
			value: e.target.value,
		})
	};
	render() {
		const { input, value, readOnly, handleChange } = this.props;
		return(
			<input
				name={input}
				id={input}
				className={'FormInput'}
				placeholder={input}
				value={value}
				onChange={handleChange}
				readOnly={readOnly}
			/>
		);
	};
};