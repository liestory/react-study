import React from 'react';

class ComponentClass extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            comments: []
        }
        this.myRef = React.createRef();
    }

    handle = () => {
        let currentCount = this.state.count;
        currentCount++;
        this.setState({
            count: currentCount,
        })
    }

    addComment = () => {
        let currentComments = this.myRef.current.value;
        let comments = this.state.comments;
        comments.push(currentComments)
        this.setState({
            'comments': comments,
        });
        this.myRef.current.value = '';
    }

    render() {
        return (
            <>
                <h1>State</h1>
                <div>
                    <button onClick={this.handle}>This button change state</button>
                </div>
                <div>
                    {this.state.count % 2 === 0 ? 'even' : 'hop'}
                </div>
                <div>
                    {this.state.count}
                </div>
                <div>
                    <textarea ref={this.myRef}></textarea>
                </div>
                <div>
                    <button onClick={this.addComment}>Add comment</button>
                </div>
                <div>
                    <ul>
                        {this.state.comments.map((comment, index) => <li key={index.toString()}> {comment}</li>)}
                    </ul>
                </div>
            </>
        )
    }
}

export default ComponentClass;