import React from 'react';
import Article from './Article';
import './style.css';

class ArticleList extends React.PureComponent {

    state = {
        openArticleId: null,
    }

    handleClick = openArticleId => this.setState({
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
    })

    render() {
        console.log('---', 2)
        const articleElements = this.props.articles.map((article, index) => {
            <li key={article.id}
                className="article-list_li">
                <Article article={article}
                         isOpen={this.state.openArticleId === article.id}
                         onButtonClick={this.handleClick.bind(this, article.id)}/>
            </li>
        })
        return (<ul>
            {articleElements}
        </ul>)
    }
}

export default ArticleList;