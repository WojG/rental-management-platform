import React from "react";

export default class BaseComponet extends React.Component{
    constructor(props){
        super(props);
    }

    _bind(...methods){
        methods.forEach(method => {
            this[method] = this[method].bind(this);
        })
    }
}