import React from 'react';
import style from './MyButton.module.scss';
import cn from 'classnames';

const Button = ({ children, inCart, ...props }) => {
	const btnClass = cn({
		[style.button]: !inCart,
		[style.disable]: props.disabled,
		[style.inCart]: inCart
	});

	return (
		<button {...props} className={btnClass}>
			{children}
		</button>
	);
};

export default Button;