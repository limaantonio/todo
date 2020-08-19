import React, { useState, useRef, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import {uuid} from 'uuidv4';


import { Form, Container, List } from './styles';

import api from '../services/api';


interface Todo{
  id: string;
  name: string;
}

const Home = () => {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);


  const formRef = useRef<FormHandles>(null);

 

  useEffect(() => {
   load()
    
  },[])

  async function load(): Promise<void> {
    const response= await api.get<Todo[]>('todos');
    setTodos(response.data)
  }

  async function handleAddTodo(todo: Todo){

    const newTodo: Todo = {
      id: uuid(),
      name: name,
    };
    
    await api.post('todos', newTodo);
    setTodos([...todos, newTodo]) 

   
  }

  async function handleDelete(id: string){

    await api.delete(`todos/${id}`);

    const todosIndex = todos.findIndex(t => t.id === id);
      const todo = [...todos];

      todo.splice(todosIndex, 1);
      setTodos(todo);
  }

  async function handleEdit(id: string){

    console.log(id)

    const newTodo: Todo = {
      id: id,
      name: name,
    };

    await api.put(`todos/${id}`, newTodo);

      const todosIndex = todos.findIndex(t => t.id === id);
    
      todos.splice(todosIndex, 1);

      setTodos([...todos, newTodo]);

      setName('')
      
  }

  return (
    <Container>
      <div className="container">
        <div className="header">
          <h1>TO-DO List</h1>
          <p>Esse é um App simples para criação de TO-DO</p>
        </div>

      <Form ref={formRef} onSubmit={handleAddTodo} >       
        <input 
          type="text"
          placeholder="Adicionar TODO"
          value={name}
          onChange={e => setName(e.target.value)}
         
        />
        <button>Adicionar</button>
      </Form>

      {todos.map(t => (
        <List key={t.id} className="list-todo">
          <div className="item-todo">
            <span>{t.name}</span>
            
            <div>
              <button id="btn-remove" onClick={() => handleDelete(t.id)}>Excluir</button>
              <button id="btn-edit"  onClick={() => handleEdit(t.id)}>Editar</button>
            </div>
          </div>
        </List>     
      ))}

      </div>
    </Container>
  )
}

export default Home;