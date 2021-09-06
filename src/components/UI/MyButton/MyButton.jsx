import React from 'react';
import style from './MyButton.module.scss';
import cn from 'classnames';

const Button = ({ children, ...props }) => {
	const btnClass = cn({
		[style.button]: !props.inCart,
		[style.disable]: props.disabled,
		[style.inCart]: props.inCart
	});

	return (
		<button {...props} className={btnClass}>
			{children}
		</button>
	);
};

export default Button;