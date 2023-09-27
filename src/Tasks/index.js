import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                className={`tasks__item ${task.done && hideDone ? "tasks__hidden" : ""}`} key={task.id}>
                <button
                className="tasks__button tasks__button--done"
                onClick={() => toggleTaskDone(task.id)}>
                    <i className={`${task.done ? "gg-check" : "tasks__button--disabled"}`}></i>
                </button>
                <span className={`tasks__content ${task.done ? "tasks__item--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    className="tasks__button tasks__button--remove"
                    onClick={() => removeTask(task.id)}>
                    <i className="gg-trash"></i>
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;