import React from 'react';
import Option from './Option'
import OptionTwo from './OptionTwo'
import OptionThree from './OptionThree'
import OptionFour from './OptionFour'

const Options = (props) => {
	return (
		<div>
		<div className="widget-header">
		<h3 className="widget--header__title">Your Chice Of Topping</h3>
			<button
			className="button button--link" 
			onClick={props.handleDeleteOptions}>Remove All
			</button>
		</div>
			{props.options.length === 0 && <p className="widget__message">Please add an option to get start</p>}
			{props.options.map((option) =>{
				if(option==='salad'){
					return <Option 
					key={option} 
					forOption={option}
					handleDeleteOption={props.handleDeleteOption}>
					</Option>}
				else if(option==='cheese'){
					return <OptionTwo 
					key={option} 
					forOption={option}
					handleDeleteOption={props.handleDeleteOption}>
					</OptionTwo>}
				else if(option==='meat'){
					return <OptionThree 
					key={option} 
					forOption={option}
					handleDeleteOption={props.handleDeleteOption}>
					</OptionThree>}
				else if(option==='bacon'){
					return <OptionFour
					key={option} 
					forOption={option}
					handleDeleteOption={props.handleDeleteOption}>
					</OptionFour>}
			})}
		</div>
	);
};

export default Options;