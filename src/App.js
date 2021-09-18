import React from 'react';
import {useForm} from 'react-hook-form'
import './App.css';

function App() {
    const {
        register,
        formState: {errors, submitCount},
        handleSubmit
    } = useForm();

    const onSubmit = (date) => console.log(date)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Форма запросов {submitCount}</h2>
            <input {...register("firstName")}/><br/>
            <input {...register("lastName", {required: true})} type="text"/><br/>


            <input {...register("age", {
                required: true,
                max: 35, min: 18,
                pattern: /\d{2}/
            })}/><br/>
            <input type="submit"/><br/>
            {errors.lastName && <span>LastName is required.</span>}<br/>
            {errors.age && <span>Age is wrong.</span>}<br/>

        </form>
    )
}


export default App;
