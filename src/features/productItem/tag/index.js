import React from "react"

function Tag(props) {

    const word = {
        SUGGEST:{
            label:"เเนะนำ",
            icon:"far fa-heart",
            color:"bg-yellow-300"
        },
        NEW:{
            label:"มาใหม่",
            icon:"far fa-star",
            color:"bg-red-300"
        },
        
    }

    return (
        <>
            { props.status != "DEFAULT" &&
              <div className={word[props.status].color} >
              <span className="text-white text-xs px-1">
                    <i className={word[props.status].icon}></i> {word[props.status].label}
                </span>
             </div>
            
            }     
        </>

    )
}

export default Tag
