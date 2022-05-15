import { Component } from "react";

export default class FormTitle extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		const { id, title } = this.props;
		return(
			<h1 id={id}>{title}</h1>
		);
	};
};