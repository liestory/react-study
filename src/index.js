import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';

const Season = ({value}) => {
    // return (
    //     <div className="season">
    //         <img className="season-image" src="https://pix-feed.com/wp-content/uploads/2018/08/aljH4L-1030x579.jpg"
    //              alt=""/>
    //         <div className="season-name">Зима</div>
    //     </div>
    // )

    if (value === 1) {
        return (
            <div className="season">
                <img className="season-image"
                     src="https://pix-feed.com/wp-content/uploads/2018/08/aljH4L-1030x579.jpg"
                     alt=""/>
                <div className="season-name">Зима</div>
            </div>
        )
    } else if (value === 2) {
        return (
            <div className="season">
                <img className="season-image"
                     src="https://interfax.by/upload/medialibrary/26b/26b40f94f35548cdc1c942c23c2eabeb.jpg"
                     alt=""/>
                <div className="season-name">Весна</div>
            </div>
        )
    } else if (value === 3) {
        return (
            <div className="season">
                <img className="season-image"
                     src="https://moy-karapuzik.ru/wp-content/uploads/2019/05/22220/1.jpg"
                     alt=""/>
                <div className="season-name">Лето</div>
            </div>
        )
    } else {
        return (
            <div className="season">
                <img className="season-image"
                     src="https://ethnomir.ru/upload/medialibrary/b22/poem1.jpg"
                     alt=""/>
                <div className="season-name">Зима</div>
            </div>
        )
    }

    switch (value) {
        case 1:
            return (
                <div className="season">
                    <img className="season-image"
                         src="https://pix-feed.com/wp-content/uploads/2018/08/aljH4L-1030x579.jpg"
                         alt=""/>
                    <div className="season-name">Зима</div>
                </div>
            )
        case 2:
            return (
                <div className="season">
                    <img className="season-image"
                         src="https://interfax.by/upload/medialibrary/26b/26b40f94f35548cdc1c942c23c2eabeb.jpg"
                         alt=""/>
                    <div className="season-name">Весна</div>
                </div>
            )
        case 3:
            return (
                <div className="season">
                    <img className="season-image"
                         src="https://moy-karapuzik.ru/wp-content/uploads/2019/05/22220/1.jpg"
                         alt=""/>
                    <div className="season-name">Лето</div>
                </div>
            )
        default:
            return (
                <div className="season">
                    <img className="season-image"
                         src="https://ethnomir.ru/upload/medialibrary/b22/poem1.jpg"
                         alt=""/>
                    <div className="season-name">Зима</div>
                </div>
            )
    }

    return value === 1 ? (
        <div className="season">
            <img className="season-image"
                 src="https://pix-feed.com/wp-content/uploads/2018/08/aljH4L-1030x579.jpg"
                 alt=""/>
            <div className="season-name">Зима</div>
        </div>
    ) : value === 2 ? (
        <div className="season">
            <img className="season-image"
                 src="https://interfax.by/upload/medialibrary/26b/26b40f94f35548cdc1c942c23c2eabeb.jpg"
                 alt=""/>
            <div className="season-name">Весна</div>
        </div>
    ) : value === 3 ? (
        <div className="season">
            <img className="season-image"
                 src="https://moy-karapuzik.ru/wp-content/uploads/2019/05/22220/1.jpg"
                 alt=""/>
            <div className="season-name">Лето</div>
        </div>
    ) : (
        <div className="season">
            <img className="season-image"
                 src="https://ethnomir.ru/upload/medialibrary/b22/poem1.jpg"
                 alt=""/>
            <div className="season-name">Зима</div>
        </div>
    )

    return (
        <div className="season">
            {value === 1 ? (
                <>
                    <img className="season-image"
                         src="https://interfax.by/upload/medialibrary/26b/26b40f94f35548cdc1c942c23c2eabeb.jpg"
                         alt=""/>
                    <div className="season-name">Весна</div>
                </>
            ) : value === 2 ? (
                <>
                    <img className="season-image"
                         src="https://interfax.by/upload/medialibrary/26b/26b40f94f35548cdc1c942c23c2eabeb.jpg"
                         alt=""/>
                    <div className="season-name">Весна</div>
                </>
            ) : value === 3 ? (
                <>
                    <img className="season-image"
                         src="https://moy-karapuzik.ru/wp-content/uploads/2019/05/22220/1.jpg"
                         alt=""/>
                    <div className="season-name">Лето</div>
                </>
            ) : (
                <>
                    <img className="season-image"
                         src="https://ethnomir.ru/upload/medialibrary/b22/poem1.jpg"
                         alt=""/>
                    <div className="season-name">Зима</div>
                </>
            )
            }
        </div>
    )

    return (
        <div className="season">
            <img className="season-image"
                 src={
                     value === 1 ? "https://interfax.by/upload/medialibrary/26b/26b40f94f35548cdc1c942c23c2eabeb.jpg" :
                         value === 2 ? "https://interfax.by/upload/medialibrary/26b/26b40f94f35548cdc1c942c23c2eabeb.jpg" :
                             value === 3 ? "https://moy-karapuzik.ru/wp-content/uploads/2019/05/22220/1.jpg" :
                                 "https://ethnomir.ru/upload/medialibrary/b22/poem1.jpg"

                 }
                 alt=""/>
            <div className="season-name">{
                value === 1 ? 'Зима' :
                    value === 2 ? 'Весна' :
                        value === 3 ? 'Лето' :
                            'Осень'
            }
            </div>
        </div>
    )


    return (
        <div className="season">
            {value === 1 && (
                <>
                    <img className="season-image"
                         src="https://interfax.by/upload/medialibrary/26b/26b40f94f35548cdc1c942c23c2eabeb.jpg"
                         alt=""/>
                    <div className="season-name">Весна</div>
                </>
            )}
            {value === 2 && (
                <>
                    <img className="season-image"
                         src="https://interfax.by/upload/medialibrary/26b/26b40f94f35548cdc1c942c23c2eabeb.jpg"
                         alt=""/>
                    <div className="season-name">Весна</div>
                </>
            )}
            {value === 3 && (
                <>
                    <img className="season-image"
                         src="https://moy-karapuzik.ru/wp-content/uploads/2019/05/22220/1.jpg"
                         alt=""/>
                    <div className="season-name">Лето</div>
                </>
            )}
            {value === 4 && (
                <>
                    <img className="season-image"
                         src="https://ethnomir.ru/upload/medialibrary/b22/poem1.jpg"
                         alt=""/>
                    <div className="season-name">Зима</div>
                </>
            )
            }
        </div>
    )
}


Season.propTypes = {
    value: PropTypes.number.isRequired
}

ReactDOM.render(
    <Season value={1}/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
