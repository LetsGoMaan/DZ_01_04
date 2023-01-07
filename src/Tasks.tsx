import React from "react";
import {DataType} from "./App";

type TasksPropType = {
    data: DataType
}
export function Tasks (props: TasksPropType) {

    return (
        <div>
            <h3>{props.data.title}</h3>
            <ul>
                {props.data.tasks.map(el => {
                    return (
                        <li>
                            <span>{el.taskId}</span>
                            <span>{el.title}</span>
                            <span>{el.isDone}</span>
                        </li>
                    )

                })}
            </ul>
            <ul>
                {props.data.students.map(el => {
                    return (
                        <li>{el}</li>
                    )
                })
                }
            </ul>
        </div>

    )
}