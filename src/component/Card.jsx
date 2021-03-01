import React from "react";
import Note from "./Note";

function Card(props)
{
    return <Note title={props.title} content={props.content}/>;
}
export default Card;