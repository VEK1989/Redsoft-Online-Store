import React from 'react';
import logo from '../../fonts/Logo.svg';
import SearchBlock from './SearchBlock/SearchBlock';
import style from './Header.module.scss'

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.header__container}>
				<div className={style.header__logo}>
					<img src={logo} alt='Logo' width='48px' height='48px' />
					<div className={style.navbar}>
						<a className={style.navbar__link} href='#'>Каталог</a>
						<a className={style.navbar__link} href='#'>Доставка</a>
						<a className={style.navbar__link} href='#'>Оплата</a>
						<a className={style.navbar__link} href='#'>Контакты</a>
						<a className={style.navbar__link} href='#'>О галерее</a>
					</div>
				</div>
				<SearchBlock />
			</div>
		</header>
	);
};

export default Header;