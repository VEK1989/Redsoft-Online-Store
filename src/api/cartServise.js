import axios from 'axios';

export default class CartServise {
	static async putInCart() {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
		return response
	}
}