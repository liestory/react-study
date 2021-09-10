import React, {useState, useEffect} from 'react';

function Test2(props)  {
    console.log('set State')

    const [s1, setS1] = useState(props.arg);

    const buttonHandler = () => {
        console.log('Handler')
        let value = s1;
        value++;
        setS1(value);
    }

    useEffect(() =>{
        console.log('effect')
    })

    console.log('render 1')
    return (
        <>
            {console.log('render 2')}
            <div>
                <button onClick={buttonHandler}>Pushh</button>
            </div>
            <div>
                {s1}
            </div>
        </>
    )
}

export default Test2;