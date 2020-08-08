import React from 'react';
import '../css/button.css'
function Button({label}){
    return <div data-tested ="button" className="button-style">hii{label}</div>
}
export default Button;