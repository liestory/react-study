import React from 'react';

class Article extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.defaultOpen,
            count: 0
        }
    }


    componentWillMount() {
        console.log('---', 'componentWillMount')
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultOpen !== this.props.defaultOpen) {
            this.setState({
                isOpen: nextProps.defaultOpen
            })
        }
    }

    componentWillUpdate() {
        console.log('---', 'componentWillUpdate')
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const {article, isOpen} = this.props;
        const style = {width: '50%'}
        const body = isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={style}>
                <div className="card-header">
                    <h2 onClick={this.incrementCounter}>
                        {article.title}
                        clicked {this.state.count}
                        <button onClick={this.handleClick}
                                className="btn btn-primary btn-lg">
                            {isOpen ? 'closed' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        creation date: {(new Date(article.date).toDateString())}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }
}

export default Article;