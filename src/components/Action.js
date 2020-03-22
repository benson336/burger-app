import React from 'react';

const Action = (props) => {
		return (
			<div>
				<button className="big-button"
				disabled={!props.hasOptions}>
				Build Your Own Burger!
				</button>
			</div>
			
		);
	};

export default Action;

