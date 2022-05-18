import { Component } from "react";
import School from "./School";
import uniqid from 'uniqid';
import ItemAdd from "./subcomponents/ItemAdd";
import FormTitle from "./subcomponents/FormTitle";
import '../styles/Education.scss'

export default class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			readOnly: true,
			education: []
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	};
	handleClick() {
		const schoolID = uniqid();
		this.setState(state => ({
			education: (state.education.concat(
				<School key={schoolID} id={schoolID} handleDelete={this.handleDelete}/>
			)),
		}));
	};
	handleDelete(schoolID) {
		const index = this.state.education.findIndex(school => school.key == schoolID);
		this.setState(state => ({
			education: state.education.filter(school => school != state.education[index])
		}));
	};
	render() {
		const { handleClick } = this;
		const { education } = this.state;
		return(
			<div className="Education">
				<div className="education-wrapper">
					<FormTitle id={'title-education'} title={'Education'}/>
					<ItemAdd item={'School'} handleClick={handleClick}/>
				</div>
				<div className="education-container"> {education} </div>
			</div>
		);
	};
};