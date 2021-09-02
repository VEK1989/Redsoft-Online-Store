import React from 'react';
import style from './PictureCart.module.scss';
import MyButton from '../../UI/MyButton/MyButton';

const PictureCart = (props) => {


	if (props.item.sold) {
		return <div className={style.cart}>
			<img src={props.item.url} alt='picture' width='280px' height='160px' />
			<div className={style.cart__discription}>
				<p className={style.cart__discription__name_sold}>{props.item.name}</p>
				<p className={style.sold}>Продана на аукционе</p>
			</div>
		</div>
	}

	return (
		<div className={style.cart}>
			<img src={props.item.url} alt='picture' width='280px' height='160px' />
			<div className={style.cart__discription}>
				<p className={style.cart__discription__name}>{props.item.name}</p>
				<div className={style.cart__discription__price}>
					<div>{props.item.price}</div>
					<MyButton>Купить</MyButton>
				</div>
			</div>
		</div>
	);
};

export default PictureCart;