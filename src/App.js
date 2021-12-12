import React from 'react';

import {
	MyProvider,
} from './context';
import User from './components/user';

function App() {
	return (
		<>
			<MyProvider>
				<User />
			</MyProvider>
		</>
	);
}

export default App;
