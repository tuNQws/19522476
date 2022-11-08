import * as React from "react";

class AlertButton extends React.Component {
    onClick() {
        alert("Alert!!!");
    }
    
    render() {
        return <button onClick={this.onClick}>Alert me!</button>;
    }
}


export default AlertButton;