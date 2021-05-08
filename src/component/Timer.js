import React from 'react';

const Timer = ({ days, hours, minutes, seconds }) => {
    return ( <
        div > < span > { days }
        Days { hours }
        Hours { minutes }
        Minutes { seconds }
        Seconds < /span>

        <
        /div>
    );

}

export default Timer;