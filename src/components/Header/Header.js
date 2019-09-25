import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
	state = {
		isMenuOpen: false,
	}

	render = () => {
		
		const { siteTitle } = this.props;
		const { isMenuOpen } = this.state;
		const burgerClass = isMenuOpen ? 'is-active' : '';

		return (
			<nav className="navbar">
				<div className="container">
					<div className="navbar-brand">
						<h1 className="navbar-item">
							{siteTitle}
						</h1>
						<a
							className={`navbar-burger ${burgerClass}`}
							role="button"
							aria-label="menu"
						>
							<span aria-hidden="true" />
							<span aria-hidden="true" />
							<span aria-hidden="true" />
						</a>
					</div>
					<div className={`navbar-menu ${burgerClass}`}>
						<div className="navbar-end">
							<a className="navbar-item">Home</a>
							<a className="navbar-item">Projects</a>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;