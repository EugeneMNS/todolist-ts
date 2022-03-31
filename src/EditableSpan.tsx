import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@material-ui/core";

export type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
    disabled?:boolean
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <TextField variant='outlined' value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
        : <span style={{
            cursor: props.disabled ? 'default' : 'pointer',
            color: props.disabled ? '#999' : 'inherit',
            textDecoration: props.disabled ? 'line-through' : 'none'
        }} onDoubleClick={activateEditMode}>{props.value}</span>
}
