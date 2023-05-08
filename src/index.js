const init = () => {
	const inputForm = document.querySelector('form');

	inputForm.addEventListener('submit', async (event) => {
		event.preventDefault();
		const input = document.querySelector('input#searchByID');
		console.log(input.value);
		const response = await fetch(`http://localhost:3000/movies/${input.value}`);
		const data = await response.json();

		const title = document.querySelector('section#movieDetails h4');
		const summary = document.querySelector('section#movieDetails p');
		title.innerText = data.title;
		summary.innerText = data.summary;
	});
};

document.addEventListener('DOMContentLoaded', init);
