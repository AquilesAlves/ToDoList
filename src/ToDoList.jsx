import React, {useState} from "react";
import './ToDoList.css';
import Icone from './assets/icone.webp'

function ToDoList() {

    const [lista, setLista] = useState([])
    const [novoItem, setNovoItem] = useState('')

    function adicionaItem(form) {
        form.preventDefault();
        if (!novoItem) {
            return
        }
        setLista([...lista, {text: novoItem, isCompleted: false}])
        setNovoItem('')
        document.getElementById('input-entrada').focus()

    }

    function clicou(index) {
        const listaAux = [...lista]
        listaAux[index].isCompleted = !listaAux[index].isCompleted
        setLista(listaAux)
    }

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionaItem} >
                <input 
                    id="input-entrada"
                    type="text"
                    value={novoItem} 
                    onChange={(e) => {setNovoItem(e.target.value)} }
                    placeholder="Adicione uma Tarefa"
                />
                <button className="add" type="submit">
                    Add
                </button>
            </form>
            <div className="listaTarefas">
                <div style={{textAlign: 'center'}}>
                    {
                        lista.length <1
                            ?
                            <img className="icone-central" src={Icone}/>
                            :
                            lista.map((item, index) => (
                                <div 
                                    key={index}
                                    className={item.isCompleted ? 'item completo' : 'item'}
                                >
                                    <span onClick={() => {clicou(index)} } >{item.text}</span>
                                    <button className="del">Deletar</button>
                                </div>
                            ))
 
                    }
                </div>

                <button className="delAll">Deletar Todos</button>
            
            </div>


        </div>
    )
}

export default ToDoList