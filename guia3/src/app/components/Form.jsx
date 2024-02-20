"use client";
import React, { useState } from 'react';
import Todo from './Todo';
import styles from "../page.module.css";
const Form = () => {
    const [todo,setTodo]=useState({})
    const [productName, setProductName] = useState('');
    const [brand, setBrand] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [todos, setTodos] = useState([]);
    const handleChange = e => {
        const { name, value } = e.target;
        if (name === 'productName') {
            setProductName(value);
        } else if (name === 'brand') {
            setBrand(value);
        } else if (name === 'quantity') {
            setQuantity(value);
        } else if (name === 'price') {
            setPrice(value);
        }
    };
    const handleClick = e => {
        e.preventDefault();
        if (!productName.trim() || !brand.trim() || !quantity.trim() || !price.trim()) {
            alert('Todos los campos deben ser completados');
            return;
        }
        const newTodo = {
            productName: productName,
            brand: brand,
            quantity: quantity,
            price: price
        };
        setTodos([...todos, newTodo]);
        setProductName('');
        setBrand('');
        setQuantity('');
        setPrice('');
    };
    const deleteTodo = indice => {
        const newTodos = [...todos];
        newTodos.splice(indice, 1);
        setTodos(newTodos);
    };
    return (
        <>
            <form onSubmit={e => e.preventDefault()} action="">
                <label>Nombre del producto:</label>
                <input className={styles.form_input} type='text' name='productName' value={productName} onChange={handleChange} /> <br />
                <label>Marca:</label>
                <input className={styles.form_input} type='text' name='brand' value={brand} onChange={handleChange} /><br />
                <label>Cantidad:</label>
                <input className={styles.form_input} type='number' name='quantity' value={quantity} onChange={handleChange} /><br />
                <label>Precio:</label>
                <input className={styles.form_input} type='number' name='price' value={price} onChange={handleChange} /><br /> 
                <button className={styles.form_button} onClick={handleClick} >Agregar</button> <br />
            </form>
            {todos.map((value, index) => (
                <Todo
                    key={index}
                    todo={`Producto: ${value.productName}, Marca: ${value.brand}, Cantidad: ${value.quantity}, Precio: ${value.price}`}
                    index={index}
                    deleteTodo={deleteTodo}
                />
            ))}
        </>
    );
};
export default Form;