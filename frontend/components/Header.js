import Nav from './Nav.js'

const Header = () => (
	<div>
		<div classname="bar">
			<a href=""> Sick Fits</a>
			<Nav/>
		</div>
		<div className="sub-par">
			<p>Search</p>
		</div>
		<div>Cart</div>
	</div>
);

export default Header;