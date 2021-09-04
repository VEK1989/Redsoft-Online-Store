import React from 'react';
import NavBarWithLogo from '../NavBarWithLogo/NavBarWithLogo';
import style from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.footer__container}>
				<NavBarWithLogo />
				<ul className={style.contacts}>
					<li className={style.contacts__phone}>+7 (495) 555-55-55</li>
					<li className={style.contacts__adress}>г. Москва, ул. Расплетина, 24</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;