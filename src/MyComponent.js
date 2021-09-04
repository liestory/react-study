import React from 'react';
import 'antd/dist/antd.css';
import {Avatar, List} from 'antd';


const listMedication = [
    {
        icon: "https://cdn3.iconfinder.com/data/icons/dental-premium-color-symbol/91/Dental_-_Tooth_-_Dentist_-_Dentistry_34-128.png",
        title: "зубы",
        description: 'все возможные процедуры по восстановлению зубов'
    },
    {
        icon: "https://cdn.pixabay.com/photo/2018/04/09/21/58/medical-3305668_960_720.jpg",
        title: 'глаза',
        description: 'лазерна коррекция'
    },
    {
        icon: "https://cdn.pixabay.com/photo/2017/05/15/23/44/heart-icon-2316451_960_720.png",
        title: 'сосуды',
        description: 'вывод токсинов'
    },
    {
        icon: "https://cdn.pixabay.com/photo/2017/05/15/23/47/stethoscope-icon-2316460_1280.png",
        title: 'амбулаторное лечение',
        description: 'амбулаторное лечение'
    },
];

class MyComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            visibleInput: false,
            parText: 'Check Text'
        };

    }

    onChangeVisibility = (event) => {
        this.setState({visibleInput: event.target.checked})
    }


    render() {
        let label = "бенефит услуг ДМС"
        return (
            <div>
                <h2>{label}</h2>
                <label>Нажмите для показа услуг </label>
                <input type="checkbox" onChange={this.onChangeVisibility}/>
                {
                    this.state.visibleInput &&
                    <List
                        itemLayout="horizontal"
                        dataSource={listMedication}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar
                                        src={item.icon}/>}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                    />
                }
            </div>
        )
    }
}

export default MyComponent;