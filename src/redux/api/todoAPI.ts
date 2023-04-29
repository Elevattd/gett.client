// A mock function to mimic making an async request for data
export function fetchTodoList() {
	return fetch('https://jsonplaceholder.typicode.com/todos')
		.then((response) => response.json())
		.then((data) => ({ data }));
}
