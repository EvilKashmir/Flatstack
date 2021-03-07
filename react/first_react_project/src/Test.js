import React from "react";

const Example = ({error, children, size, list:any = []}) => {
    return (
        <>
            <div style={{color: error ? 'red' : 'green'}}>{children} size = {size}</div>
            <ul>
                {list.map((listItem, i:number) => <li>{listItem.name}</li>)}
            </ul>
        </>
    )
}

export default Example;