export function TodoItem({ task}){
    return(
        <div className='task-item'>
            <input type="checkbox" checked={task.isCompleted} />
            <span>{task.name}</span>
        </div>
    )
}