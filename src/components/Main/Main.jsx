import React, { useState } from 'react';
import style from './Main.module.scss';
import PictureCart from './PictureCart/PictureCart';
import picture1 from '../../images/picture1.jpg';
import picture2 from '../../images/picture2.jpg';
import picture3 from '../../images/picture3.jpg';
import picture4 from '../../images/picture4.jpg';

const Main = () => {
	const [carts, setCarts] = useState([
		{ id: 1, url: picture1, name: '«Рождение Венеры» Сандро Боттичелли', price: '2 000 000 $', discount: true, inBasket: false, sold: false },
		{ id: 2, url: picture2, name: '«Тайная вечеря»  Леонардо да Винчи', price: '3 000 000 $', discount: false, inBasket: false, sold: false },
		{ id: 3, url: picture3, name: '«Сотворение Адама» Микеланджело', price: '6 000 000 $', discount: true, inBasket: false, sold: false },
		{ id: 4, url: picture4, name: '«Урок анатомии» Рембрандт', price: '6 000 000 $', discount: false, inBasket: false, sold: true },
	])

	const [cart, setCart] = useState([])

	console.log(cart)

	return (
		<main className={style.main}>
			<div className={style.container}>
				<p className={style.main__header}>Картины эпохи Возрождения</p>
				<section className={style.goods}>
					{
						carts.map(item => <PictureCart key={item.id} item={item} setCart={setCart} cart={cart} />)
					}
				</section>
			</div>
		</main>
	);
};

export default Main;