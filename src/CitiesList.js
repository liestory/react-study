import React from "react";

function CiriesList(props) {
    return (
        <ul>
            {props.cities.map((city, index) => (
                <li key={city.name} onClick={() => props.onSelectCity(index)}>
                    {city.name} ({city.description})
                </li>
            ))}
        </ul>
    );
}

export default CiriesList;