import React from 'react';

const SubmitButton = ({ datePassed }) => {
    return ( <
        button id = "submitbutton"
        onClick = { datePassed } > submit < /button>
    );
}
export default SubmitButton;