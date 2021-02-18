import { Button, TextField } from "@material-ui/core"
import React, { ChangeEvent, FormEvent, useState } from "react"

type ChatInputPropsType = {
    send: Function
}

export const ChatInput = (props: ChatInputPropsType) => {
    const [message, setMessage] = useState("");

    const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement> ) => {
        setMessage(event.currentTarget.value)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        props.send(message);
        setMessage("")
    }
    
    return <form noValidate onSubmit={handleSubmit}>
        <TextField label="Start typing ...." variant="outlined" onChange={handleTextChange} value={message}/>
        <Button variant="contained" type="submit" >Send</Button>
    </form>
}