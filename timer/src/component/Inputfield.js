import React from 'react';
const Inputfield = ({ entereddate, value }) => {
    return ( <
        input type = "date"
        id = "enteredDate"
        onChange = { entereddate }
        value = { value }
        />
    );

}

export default Inputfield;