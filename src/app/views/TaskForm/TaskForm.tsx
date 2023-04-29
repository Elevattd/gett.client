import useTaskForm from './useTaskForm';

const TaskForm = () => {
	const [createTask, handleChange] = useTaskForm();

	return (
		<form>
			<textarea name='title' placeholder='title' onChange={handleChange} />
			<button onClick={createTask}>Save</button>
		</form>
	);
};

export default TaskForm;
