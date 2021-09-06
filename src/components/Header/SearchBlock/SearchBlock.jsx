import React, { useState } from 'react';
import style from './SearchBlock.module.scss';
import MyInput from '../../UI/MyInput/MyInput';
import MyButton from '../../UI/MyButton/MyButton';

const SearchBlock = () => {
	const [value, setValue] = useState('') //подготовил к осуществлению поиска по имени, без redux(или другого stateManeger) не удобно это делать

	// const filterItems = items.filter(item => {
	// 	return item.name.toLowerCase().includes(value.toLocaleLowerCase())
	// })

	return (
		<form className={style.search}>
			<MyInput placeholder='Поиск по названию картины' onChange={(event) => setValue(event.target.value)} />
			<MyButton>Найти</MyButton>
		</form>
	);
};

export default SearchBlock;