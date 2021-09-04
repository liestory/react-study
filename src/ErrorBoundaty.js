import React from 'react';

class ErrorBoundaty extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }

    render() {
        if (this.props.error) {
            console.log("Что-то пошло не так")
            return <h1>Что-то пошло не так</h1>
        }
        return this.props.children;
    }


}

export default ErrorBoundaty;