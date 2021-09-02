import React from 'react';
import style from './SearchBlock.module.scss';
import MyInput from '../../UI/MyInput/MyInput';
import MyButton from '../../UI/MyButton/MyButton';

const SearchBlock = () => {
	return (
		<div className={style.search}>
			<MyInput placeholder='Поиск по названию картины' />
			<MyButton>Найти</MyButton>
		</div>
	);
};

export default SearchBlock;