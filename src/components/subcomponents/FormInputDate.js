import { Component } from "react";

export default class FormInputDate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '2022-05',
		};
		this.handleChange = this.handleChange.bind(this);
	};
	handleChange(e) {
		this.setState({
			value: e.target.value,
		})
	};
	render() {
		const { handleChange } = this;
		const { input, value, readOnly } = this.props;
		return(
			<input 
				className="FormInputDate"
				name={input}
				type="month"
				value={value}
				onChange={handleChange}
				readOnly={readOnly}
			/>
		);
	};
};