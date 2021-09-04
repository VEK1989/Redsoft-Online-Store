import React from 'react';
import style from './NavBarWithLogo.module.scss';
import logo from '../../fonts/Logo.svg';
import { NavLink } from 'react-router-dom';

const NavBarWithLogo = () => {
	return (
		<div className={style.menu}>
			<img src={logo} alt='Logo' width='48px' height='48px' />
			<nav className={style.menu__navbar}>
				<NavLink to='/catalog' className={style.menu__navbar__link} >Каталог</NavLink>
				<NavLink to='/delivery' className={style.menu__navbar__link} >Доставка</NavLink>
				<NavLink to='/payment' className={style.menu__navbar__link} >Оплата</NavLink>
				<NavLink to='/contacts' className={style.menu__navbar__link} >Контакты</NavLink>
				<NavLink to='/about' className={style.menu__navbar__link} >О галерее</NavLink>
			</nav>
		</div>
	);
};

export default NavBarWithLogo;