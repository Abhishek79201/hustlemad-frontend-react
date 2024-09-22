import React from 'react'

function Redirect(props) {
    window.location.replace(props.url);
    return null;
}

export default Redirect
