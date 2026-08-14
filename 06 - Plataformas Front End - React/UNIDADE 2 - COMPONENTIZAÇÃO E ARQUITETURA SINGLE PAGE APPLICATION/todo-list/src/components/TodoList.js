import { useState } from "react";
import { AddItem } from "./AddItem";
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

    function handleOnCheck(task) {
        const updatedTask = taskList.map((t) => {
            if (t.id === task.id) {
                t.isCompleted = task.isCompleted;
            }
            return t;
        });
        setTaskList(updatedTask);
    }

    function handleOnAdd(task) {
        const newTask = taskList.concat({
            id: taskList.length + 1,
            name: task,
            isCompleted: false
        })
        setTaskList(newTask);
    }

    return (
        <section className='task-list-container'>
            <h1>Lista de Tarefas</h1>
            <div>
                <p><strong>Total de tarefas: </strong> {taskList.length}</p>
                <p><strong> Tarefas pendentes: </strong> {taskList.filter((t) => !t.isCompleted).length}</p>
                <p><strong> Tarefas concluídas: </strong> {taskList.filter((t) => t.isCompleted).length}</p>
            </div>
            <AddItem onAdd={handleOnAdd} />
            <ul>
                {taskList.map((task) => (
                    <li key={task.id}>
                        <TodoItem task={task} onCheck={handleOnCheck} />
                    </li>
                ))}
            </ul>
        </section>
    )
}