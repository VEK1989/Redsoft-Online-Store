import React from 'react';
import style from './PictureCart.module.scss';
import MyButton from '../../UI/MyButton/MyButton';

const PictureCart = (props) => {

	const addInCart = () => {
		props.setCart([...props.cart, { name: props.item.name, price: props.item.price }])

	}


	if (props.item.sold) {
		return <div className={style.blok}>
			<img className={style.blok__picture_sold} src={props.item.url} alt='painting' width='280px' height='160px' />
			<div className={style.blok__discription}>
				<p className={style.blok__discription__name_sold}>{props.item.name}</p>
				<p className={style.sold}>Продана на аукционе</p>
			</div>
		</div>
	}

	return (
		<div className={style.blok}>
			<img src={props.item.url} alt='painting' width='280px' height='160px' />
			<div className={style.blok__discription}>
				<p className={style.blok__discription__name}>{props.item.name}</p>
				<div className={style.blok__discription__price}>
					<div>{props.item.price}</div>
					<MyButton onClick={addInCart} >Купить</MyButton>
				</div>
			</div>
		</div>
	);
};

export default PictureCart;