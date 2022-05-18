import { Component } from "react";
import uniqid from 'uniqid';
import FormInput from "./subcomponents/FormInput";
import ItemAdd from "./subcomponents/ItemAdd";
import ItemDelete from "./subcomponents/ItemDelete";
import FormTitle from "./subcomponents/FormTitle";
import '../styles/Skills.scss';

export default class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skill: '',
			list: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	};
	handleChange(e) {
		e.preventDefault();
		this.setState({
			skill: e.target.value,
		});
	};
	handleClick(e) {
		const skillID = uniqid();
		e.preventDefault();
		this.setState(state => ({
			list: state.list.concat(
				<li className="skill-item" key={skillID}>
					<span> • {state.skill}</span>
					<ItemDelete id={skillID} handleDelete={this.handleDelete}/>
				</li>
			),
		}));
		this.setState({
			skill: '',
		});
	};
	handleDelete(e) {
		const item = this.state.list.findIndex(skill => skill.key == e.target.id);
		this.setState(state => ({
			list: state.list.filter(skill => skill != state.list[item]),
		}));

	};
	render() {
		const { handleChange, handleClick } = this;
		const { list, skill } = this.state;
		return(
			<form className="Skills">
				<FormTitle id={'title-skills'} title={'Skills'}/>
				<div className="skill-wrapper">
					<FormInput handleChange={handleChange} input={'Enter Skill'} value={skill}/>
					<ItemAdd item={'Skill'} handleClick={handleClick}/>
				</div>
				<ul className="skill-list"> {list} </ul>
			</form>
		);
	};
};