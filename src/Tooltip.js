import React from 'react';
//..................................................here is the tooltip class based component.......................................................


class Tooltip extends React.Component{
    classn=()=>{
        
        return `${this.props.position}`;
    }

    render(){
        return (
            <div className={`${this.classn()}`}>
                thanks for hovering "{this.props.position}" position!
            </div>
        )
    }
}


export default Tooltip;