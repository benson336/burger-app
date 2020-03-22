import React from 'react';

const OptionTwo = (props) => {
	return (
			<div className="option cheese">
			{props.forOption}
			<button 
			className="button button--link" 
			onClick={(e) => {
				props.handleDeleteOption(props.forOption);
			}}>Remove</button>
			</div>
		);
};

export default OptionTwo;