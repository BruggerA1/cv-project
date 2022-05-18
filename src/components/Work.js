import { Component } from "react";
import uniqid from 'uniqid';
import Job from "./Job";
import ItemAdd from "./subcomponents/ItemAdd";
import FormTitle from "./subcomponents/FormTitle";
import '../styles/Work.scss';

export default class Work extends Component {
	constructor(props) {
		super(props);
		this.state = {
			readOnly: true,
			work: [],
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	};
	handleClick() {
		const jobID = uniqid();
		this.setState(state => ({
			work: (state.work.concat(
				<Job key={jobID} id={jobID} handleDelete={this.handleDelete}/>
			)),
		}));

	};
	handleDelete(jobID) {
		const index = this.state.work.findIndex(job => job.key == jobID);
		this.setState(state => ({
			work: state.work.filter(job => job != state.work[index]),
		}));
	};
	render() {
		const { handleClick } = this;
		const { work } = this.state;
		return(
			<div className="Experience">
				<div className="work-wrapper">
					<FormTitle id={'title-experience'} title={'Experience'}/>
					<ItemAdd item={'Job'} handleClick={handleClick}/>
				</div>
				<div className="job-wrapper"> {work} </div>
			</div>
		);
	};
};