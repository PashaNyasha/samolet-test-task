import React, { memo } from 'react';
import ReactDOM from 'react-dom';

export const App = memo(() => {

    return (
        <div className="">Hello</div>
    )
})

ReactDOM.render(<App /> ,document.getElementById('root'));