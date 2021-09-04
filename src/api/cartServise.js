import axios from 'axios';

export default class CartServise {
	static async putInCart() {
		await axios.get('https://jsonplaceholder.typicode.com/posts/1')
			.then((resp) => {
				return resp
			})
	}
}