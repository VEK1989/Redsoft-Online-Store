import React, { useState } from 'react';
import style from './Main.module.scss';
import PictureItem from './PictureItem/PictureItem';
import picture1 from '../../images/picture1.jpg';
import picture2 from '../../images/picture2.jpg';
import picture3 from '../../images/picture3.jpg';
import picture4 from '../../images/picture4.jpg';

const Main = () => {
	const [items, setItems] = useState([
		{ id: 1, url: picture1, name: '«Рождение Венеры» Сандро Боттичелли', price: '1 000 000 $', discount: true, oldPrice: '2 000 000 $', sold: false },
		{ id: 2, url: picture2, name: '«Тайная вечеря»  Леонардо да Винчи', price: '3 000 000 $', discount: false, oldPrice: '3 000 000 $', sold: false },
		{ id: 3, url: picture3, name: '«Сотворение Адама» Микеланджело', price: '5 000 000 $', discount: true, oldPrice: '6 000 000 $', sold: false },
		{ id: 4, url: picture4, name: '«Урок анатомии» Рембрандт', price: '6 000 000 $', discount: false, oldPrice: '6 000 000 $', sold: true },
	])

	const [cart, setCart] = useState([])


	return (
		<main className={style.main}>
			<div className={style.container}>
				<h2 className={style.main__header}>Картины эпохи Возрождения</h2>
				<section className={style.goods}>
					{
						items.map(item => <PictureItem
							key={item.id}
							item={item}
							setCart={setCart}
							cart={cart}
						/>)
					}
				</section>
			</div>
		</main>
	);
};

export default Main;