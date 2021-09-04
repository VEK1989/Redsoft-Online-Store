import React, { useEffect, useState } from 'react';
import style from './PictureCart.module.scss';
import MyButton from '../../UI/MyButton/MyButton';
import Loader from '../../UI/Loader/Loader';
import CartServise from '../../../api/cartServise';

const PictureCart = (props) => {
	const [data, setData] = useState('')
	const [isFetching, setIsFetching] = useState(false)

	useEffect(() => {
		const isInCart = window.localStorage.getItem(`${props.item.id}`)
		if (isInCart === props.item.name) {
			console.log(`В корзине ${isInCart}`)
		}
	}, [])

	async function addInCart() {
		setIsFetching(true)
		const data = await CartServise.putInCart()
		setData(data)
		setIsFetching(false)
		window.localStorage.setItem(`${props.item.id}`, `${props.item.name}`)
		props.setPainting([...props.painting, { name: props.item.name, price: props.item.price }])
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
					<MyButton disabled={isFetching} onClick={addInCart} >
						{
							!isFetching
								? 'Купить'
								: <Loader />
						}
					</MyButton>
				</div>
			</div>
		</div>
	);
};

export default PictureCart;