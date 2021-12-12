import React, { useRef, } from 'react';

function App() {
	const textInput = useRef(null);

	function triggerHandler() {
		console.log(textInput);
	}

	return (
		<>
			<h1>Form:</h1>

			<InputComponent
				ref={textInput}
			/>

			<button
				onClick={triggerHandler}
			>
				Trigger
			</button>
		</>
	);
}

const InputComponent = React.forwardRef(({}, ref) => {
	return (
		<input
			ref={ref}
			type="text"
		/>
	);
});

export default App;
