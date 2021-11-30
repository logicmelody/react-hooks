import React from 'react';

function Title() {
	console.log('1-Title');

	return (
		<>
			<h1>My app</h1>
			<hr />
		</>
	);
}

export default React.memo(Title);
