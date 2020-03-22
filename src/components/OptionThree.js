import React from 'react';

const OptionThree = (props) => {
	return (
			<div className="option meat">
			{props.forOption}
			<button 
			className="button button--link" 
			onClick={(e) => {
				props.handleDeleteOption(props.forOption);
			}}>Remove</button>
			</div>
		);
};

export default OptionThree;