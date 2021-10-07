import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form'
import './App.css';


function App() {
    const {
        register,
        formState: {errors, submitCount},
        handleSubmit
    } = useForm();

    useEffect(() => {
        const request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify([{register: register}])
        };
        fetch('https://reqres.in/api/posts', request)
            .then(response => response.json())
    }, []
    );


    const onSubmit = (date) => console.log(date)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {submitCount === 0 || errors !== null ? (
                <div>
                    <h2>Форма запросов {submitCount}</h2>
                    <label>Фамилия </label>
                    <input {...register("lastName", {required: true, maxLength: 50})}
                           type="text"/><br/>
                    <label>Имя </label>
                    <input {...register("firstName", {required: true, maxLength: 31})}
                           type="text"/><br/>
                    <label>Отчество </label>
                    <input {...register("secondName", {required: true, maxLength: 31})}
                           type="text"/><br/>
                    <label>Дата рождения </label>
                    <input {...register("birthDate", {
                        required: true,
                        pattern: /\d{2}.\d{2}.\d{4}/
                    })} type="text"/><br/>
                    <label>Телефон </label>
                    <input {...register("phone", {
                        required: true, pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
                    })} type="text"/><br/>
                    <label>E-mail </label>
                    <input {...register("email", {
                        pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
                    })} type="text"/><br/>
                    <input type="submit"/><br/>
                    {errors.lastName && <span>LastName is required.</span>}<br/>
                    {errors.age && <span>Age is wrong.</span>}<br/>
                </div>
            ) : (
                <div>
                    <h2>Форма запросов {submitCount}</h2>
                    <label>Фамилия </label>
                    <p>{register.lastName}</p><br/>
                    <label>Имя </label>
                    <p>{register.firstName}</p><br/>
                    <label>Отчество </label>
                    <p>{register.secondName}</p><br/>
                    <label>Дата рождения </label>
                    <p>{register.birthDate}</p><br/>
                    <label>Телефон </label>
                    <p>{register.phone}</p><br/>

                    {register.email !== null && <div><label>E-mail </label><p>{register.email}</p><br/></div>}

                </div>
            )}
        </form>

    )
}

export default App;
