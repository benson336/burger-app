import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import Menu from './Menu.js';

export default class BurgerMakerApp extends React.Component{
	constructor(props){
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options: []
		};
	}
	handleDeleteOptions(){
		this.setState(() => {
			return {
				options: []
			}
		});
	}
	handleDeleteOption(optionToRemove){
		this.setState((preState) => ({
			options: preState.options.filter((option) => {
				return optionToRemove !== option;
			})
		}));
	}

	handleAddOption(option){
		if (this.state.options.indexOf(option) > -1){
			return 'This option already exists';
		}
		switch (option){
			case "salad":
			this.setState((preState) => {
			return{options: preState.options.concat(option)};
			});
			break;
			
			case "cheese":
			this.setState((preState) => {
			return{options: preState.options.concat(option)};
			});
			break;

			case "meat":
			this.setState((preState) => {
			return{options: preState.options.concat(option)};
			});
			break;

			case "bacon":
			this.setState((preState) => {
			return{options: preState.options.concat(option)};
			});
			break;

			default:
			return "Sorry we dont have this item, pick other one";
		}
}
	render(){
		const title = 'Do It Yourself';
		const subtitle = 'Pick your favorite toppings!';
		return (
			<div>
				<Header title={title} subtitle={subtitle} />
					<div className="container">

						<Action hasOptions={this.state.options.length > 0} />
						<Menu/>
						<div className="breadTop"></div>
						<Options options={this.state.options} 
						handleDeleteOp tions={this.handleDeleteOptions}
						handleDeleteOption={this.handleDeleteOption}
						/>
						<AddOption handleAddOption={this.handleAddOption}/>
					
						<div className="breadBottom"></div>
					</div>
			</div>
		);
	}
}