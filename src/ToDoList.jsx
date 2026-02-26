import React from "react";
import './ToDoList.css';

function ToDoList() {
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form>
                <input 
                    type="text" placeholder="Adicione uma Tarefa"
                />
                <button className="add" type="submit">
                    Add
                </button>
            </form>
            <div className="listaTarefas">
                <div className="item">
                    <span>Tarefa de exemplo</span>
                    <button>Deletar</button>
                </div>
                <div className="item completo">
                    <span>Tarefa de exemplo</span>
                    <button>Deletar</button>
                </div>
            </div>


        </div>
    )
}

export default ToDoList