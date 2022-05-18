import { Component } from "react";

export default class ItemAdd extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		const { handleClick, item } = this.props;
		return(
			<button className="ItemAdd" onClick={handleClick}> +{item}</button>
		);
	};
};