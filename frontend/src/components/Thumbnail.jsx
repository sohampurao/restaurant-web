import React from 'react';

const Thumbnail = (props) => {
return (
    <>
    <div className="w-100 thumbnail menu-thumbnail text-center" id={props.id}>
        <div className="w-100 thumbnail-txt text-capitalize">{props.title}</div>
    </div>
    </>
)
}

export default Thumbnail;