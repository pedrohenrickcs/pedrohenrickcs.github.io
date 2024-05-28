import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

class Header extends Component {
	state = {
		isMenuOpen: false,
	}

	handleMenu = () => {
		this.setState(previousState => ({
			 isMenuOpen: !previousState.isMenuOpen,
		}));
	}

	closeMenu = () => {
		this.setState({ isMenuOpen: false });
	}

	render = () => {
		
		const { siteTitle } = this.props;
		const { isMenuOpen } = this.state;
		const burgerClass = isMenuOpen ? 'is-active' : '';


		return (
			<nav className="navbar">
				<div className="container">
					<div className="navbar-brand">
						<Link 
							className="navbar-item is-size-4" 
							to="/"
						>
							{siteTitle}
						</Link>
						<button
							className={`navbar-burger ${burgerClass}`}
							type="button"
							aria-label="menu"
							onClick={this.handleMenu}
						>
							<span aria-hidden="true" />
							<span aria-hidden="true" />
							<span aria-hidden="true" />
						</button>
					</div>
					<div className={`navbar-menu ${burgerClass}`}>
						<div className="navbar-end">
							<Link 
								to="/"
								className="navbar-item is-size-5"
								onClick={this.closeMenu}
							>
									Home
							</Link>
							<Link 
								to="/projects"
								className="navbar-item is-size-5"
								onClick={this.closeMenu}
							>
								Projects
							 </Link>
							<Link 
								to="/stack"
								className="navbar-item is-size-5"
								onClick={this.closeMenu}
							>
								Stack
							 </Link>
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