import React, { Component, } from 'react';

import {
	MyContext,
} from '../context';
import UserItem from './user-item';

class User extends Component {
	render() {
		return (
			<>
				<MyContext.Consumer>
					{context => {
						console.log(context);
					}}
				</MyContext.Consumer>

				<UserItem />
			</>
		);
	}
}

export default User;
