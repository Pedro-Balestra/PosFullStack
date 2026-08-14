export function TodoItem({ task, onCheck }) {
    function handleOnChange(event) {
        onCheck({ ...task, isCompleted: event.target.checked });
    }

    return (
        <div className='task-item'>
            <input type="checkbox" checked={task.isCompleted} onChange={handleOnChange} />
            <span>{task.name}</span>
        </div>
    )
}