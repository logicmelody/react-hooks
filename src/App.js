import React, { useState, useCallback, } from 'react';

import Title from './components/title';
import Count from './components/count';
import CountBtn from './components/count-btn';
import Age from './components/age';
import AgeBtn from './components/age-btn';

function App() {
	const [count, setCount] = useState(0);
	const [age, setAge] = useState(10);

	const incrementCount = useCallback(() => {
		setCount(count => count + 1);
	}, []);

	const incrementAge = useCallback(() => {
		setAge(age => age + 1);
	}, []);

	return (
		<>
			<Title />

			<Count
				count={count}
			/>

			<CountBtn
				handleCount={incrementCount}
			/>

			<Age
				age={age}
			/>

			<AgeBtn
				handleAge={incrementAge}
			/>
		</>
	);
}

export default App;
