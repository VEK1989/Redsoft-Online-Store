import React from 'react';
import style from './MyButton.module.scss'

const Button = ({ children, ...props }) => {
	return (
		<button {...props} className={style.button}>
			{children}
		</button>
	);
};

export default Button;