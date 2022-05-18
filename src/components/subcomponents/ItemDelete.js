import { Component } from "react";

export default class ItemDelete extends Component {
	constructor(props) {
		super(props);
	};

	render() {
		const { id, handleDelete } = this.props;
		return(
			<button className="ItemDelete" id={id} onClick={handleDelete}> X </button>
		);
	};
};