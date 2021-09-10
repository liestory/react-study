import React, {useState} from 'react';

function ComponentFunc() {


    const [count, setCount] = useState(0);
    const [comments, setComments] = useState([]);


    let myRef = React.createRef();

    let handle = () => {
        let currentCount = count;
        currentCount++;
        setCount(currentCount);

    };

    let addComment = () => {
        let commentValue = myRef.current.value;
        let comment = [...comments, commentValue]
        setComments(comment);
        myRef.current.value = '';
    };

    return (
        <>
            <h1>State</h1>
            <div>
                <button onClick={handle}>This button change state</button>
            </div>
            <div>
                {count % 2 === 0 ? 'even' : 'hop'}
            </div>
            <div>
                {count}
            </div>
            <div>
                <textarea ref={myRef}></textarea>
            </div>
            <div>
                <button onClick={addComment}>Add comment</button>
            </div>
            <div>
                <ul>
                    {comments.map((comment, index) => <li key={index.toString()}> {comment}</li>)}
                </ul>
            </div>
        </>
    )

};

export default ComponentFunc;