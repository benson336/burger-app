import React from 'react'

const Menu = (props) => {

	const customStyle = {

		backgroundColor:'white',
		textAlign:'center',
		margin:'0px 150px 0px 150px'
		
	}

	return (
		<div className="widget-header-two">
			<div>
				<h3>Choice of Toppings</h3>
					<p>1. Cheese</p>
					<p>2. Salad</p>
					<p>3. Meat</p>
					<p>4. Bacon</p>
			</div>
		</div>
	)

}

export default Menu;