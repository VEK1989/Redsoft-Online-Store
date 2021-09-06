import React, { useEffect, useState } from 'react';
import style from './PictureItem.module.scss';
import MyButton from '../../UI/MyButton/MyButton';
import Loader from '../../UI/Loader/Loader';
import CartServise from '../../../api/cartServise';

const PictureItem = ({ cart, item, setCart }) => {
	const [isFetching, setIsFetching] = useState(false)
	const [isInCart, setIsInCart] = useState(false)

	useEffect(() => {
		const saveInCart = Number(window.localStorage.getItem(`${item.name}`))
		if (saveInCart === item.id) {
			setCart([...cart, item])
			setIsInCart(true)
		}
	}, [])

	async function addInCart() {
		setIsFetching(true)
		await CartServise.putInCart()
		const itemIndex = cart.findIndex(value => value.id === item.id)
		if (itemIndex < 0) {
			setCart([...cart, item])
			window.localStorage.setItem(`${item.name}`, `${item.id}`)
			setIsInCart(true)
		}
		setIsFetching(false)
	}

	if (item.sold) {
		return <div className={style.blok}>
			<img className={style.blok__picture_sold} src={item.url} alt='painting' width='280px' height='160px' />
			<div className={style.blok__discription}>
				<p className={style.blok__discription__name_sold}>{item.name}</p>
				<p className={style.sold}>Продана на аукционе</p>
			</div>
		</div>
	}

	return (
		<div className={style.blok}>
			<img src={item.url} alt='painting' width='280px' height='160px' />
			<div className={style.blok__discription}>
				<p className={style.blok__discription__name}>{item.name}</p>
				<div className={style.blok__discription__price}>
					<div>
						{
							item.discount
								? <div>
									<p className={style.discount}>{item.oldPrice}</p>
									<p className={style.price}>{item.price}</p>
								</div>
								: <p className={style.price}>{item.price}</p>
						}
					</div>
					{
						isInCart
							? <MyButton inCart={isInCart}>
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