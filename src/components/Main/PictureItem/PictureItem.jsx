import React, { useEffect, useState } from 'react';
import style from './PictureItem.module.scss';
import MyButton from '../../UI/MyButton/MyButton';
import Loader from '../../UI/Loader/Loader';
import CartServise from '../../../api/cartServise';

const PictureItem = (props) => {
	const [isFetching, setIsFetching] = useState(false)
	const [isInCart, setIsInCart] = useState(false)

	useEffect(() => {
		const saveInCart = Number(window.localStorage.getItem(`${props.item.name}`))
		if (saveInCart === props.item.id) {
			props.setCart([...props.cart, props.item])
			setIsInCart(true)
			console.log(props.cart)
		}
	}, [])

	async function addInCart() {
		setIsFetching(true)
		await CartServise.putInCart()
		const itemIndex = props.cart.findIndex(value => value.id === props.item.id)
		if (itemIndex < 0) {
			props.setCart([...props.cart, props.item])
			window.localStorage.setItem(`${props.item.name}`, `${props.item.id}`)
			setIsInCart(true)
		}
		setIsFetching(false)
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
					<div>
						{
							props.item.discount
								? <div>
									<p className={style.discount}>{props.item.oldPrice}</p>
									<p>{props.item.price}</p>
								</div>
								: props.item.price
						}
					</div>
					{
						isInCart
							? <MyButton>
								&#10003; В корзине
							</MyButton>
							: <MyButton disabled={isFetching} onClick={addInCart} >
								{
									!isFetching
										? 'Купить'
										: <Loader />
								}
							</MyButton>
					}
				</div>
			</div>
		</div>
	);
};

export default PictureItem;