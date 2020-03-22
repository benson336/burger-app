import React from 'react';

const Option = (props) => {
	return (
			<div className="option salad">
			<h1>{props.forOption}</h1>
			<button 
			className="button button--link" 
			onClick={(e) => {
				props.handleDeleteOption(props.forOption);
			}}>Remove</button>
			</div>
		);
};

export default Option;