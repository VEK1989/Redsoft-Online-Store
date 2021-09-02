import React from 'react';
import style from './MyInput.module.scss';

const Input = (props) => {
	return (
		<input className={style.input} {...props} />
	);
};

export default Input;