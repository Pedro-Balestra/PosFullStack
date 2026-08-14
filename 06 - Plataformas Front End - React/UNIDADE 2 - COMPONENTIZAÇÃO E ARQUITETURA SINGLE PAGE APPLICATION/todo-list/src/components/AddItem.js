import { useRef } from "react";

export function AddItem({ onAdd }) {

    const inputRef = useRef();

    function handleOnAddTask(event) {
        event.preventDefault(); // Evita que a página seja recarregada
        onAdd(inputRef.current.value);
        inputRef.current.value = ''; // Limpa o campo de input
    }
    return (
        <div className='add-item-container'>
            <form onSubmit={handleOnAddTask}>
                <input type="text" placeholder='Digite uma nova tarefa' ref={inputRef} />
                <button type="submit" >Adicionar</button>
            </form>
        </div>
    )
}