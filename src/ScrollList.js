import React, {createRef} from 'react';
import {Avatar, List} from 'antd';
import 'antd/dist/antd.css';
import './index.css';

class ScrollList extends React.Component {

    static defaultRef = ["C#", "Java", "C++", "Python"]

    constructor(props) {
        super(props);
        this.listRef = createRef();
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.length < this.props.length) {
            const list = this.listRef.current;
            return list.scrollHeight - list.scrollTop;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            const list = this.listRef.current;
            list.scrollTop = list.scrollHeight - snapshot;
            return;
        }
        return null;
    }

    render() {
        return (

            <div ref={this.listRef}>
                Список
                <List
                    itemLayout="horizontal"
                    dataSource={this.defaultRef}
                    renderItem={defaultRef => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar
                                    src={"https://img2.freepng.ru/20180615/oyz/kisspng-contract-computer-icons-clip-art-documents-5b23d22d94c1e9.3065325715290742216093.jpg"}/>}
                                description={defaultRef.map()}
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default ScrollList;