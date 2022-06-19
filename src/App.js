function App() {

	function delay(ms) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, ms);
		})
	}

	return (
		<div>0</div>
	);
}

export default App;
