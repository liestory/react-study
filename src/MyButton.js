import React from 'react';

const MyButton = (props, ref) => {
    return <button ref={ref}>{props.children}</button>
}

const MyButtonWrapper = React.forwardRef(MyButton);

export default MyButtonWrapper;