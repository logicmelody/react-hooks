import React, { useState, } from 'react';

function App({
	initialCount,
}) {
	const [count, setCount] = useState(initialCount);

	return (
		<>
			<h3>
				Count: {count}
			</h3>

			<button onClick={() => {
				setCount(count + 1);
			}}>
				Add one +1
			</button>

			<button onClick={() => {
				setCount((prevCount) => prevCount - 1);
			}}>
				Rest one -1
			</button>

			<button onClick={() => {
				setCount(initialCount);
			}}>
				Reset
			</button>
		</>
	);
}

export default App;
