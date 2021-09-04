import React from 'react';
import SearchBlock from './SearchBlock/SearchBlock';
import style from './Header.module.scss'
import NavBarWithLogo from '../NavBarWithLogo/NavBarWithLogo';

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.header__container}>
				<NavBarWithLogo />
				<SearchBlock />
			</div>
		</header>
	);
};

export default Header;