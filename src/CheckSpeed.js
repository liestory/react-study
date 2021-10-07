import React from 'react';

class CheckSpeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkSpeed: false,
        }
    }

    render() {
        return (
            <div>
                {this.props.speed > 60 ?
                    <span>❌ Превышение лимита скорости в 60</span> :
                    <span>✅ скорость в порядке</span>}
            </div>
        )
    }
}

export default CheckSpeed;