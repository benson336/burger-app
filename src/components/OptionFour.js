import React from 'react';

const OptionFour = (props) => {
	return (
			<div className="option bacon">
			{props.forOption}
			<button 
			className="button button--link" 
			onClick={(e) => {
				props.handleDeleteOption(props.forOption);
			}}>Remove</button>
			</div>
		);
};

export default OptionFour;