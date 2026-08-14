import { useState } from "react";
import { TodoItem } from "./TodoItem";

const TASK_LIST = [
    {
        id: 1,
        name: 'Tarefa 1',
        isCompleted: false
    },
    {
        id: 2,
        name: 'Tarefa 2',
        isCompleted: false
    },
    {
        id: 3,
        name: 'Tarefa 3',
        isCompleted: false
    },
    {
        id: 4,
        name: 'Tarefa 4',
        isCompleted: false
    },
    {
        id: 5,
        name: 'Tarefa 5',
        isCompleted: false
    },
]

export function TodoList() {
    const [taskList, setTaskList] = useState(TASK_LIST);

    return (
        <section className='task-list-container'>
            <ul>
                {taskList.map((task) => (
                    <li key={task.id}>
                        <TodoItem task={task} />
                    </li>
                ))}
            </ul>
        </section>
    )
}