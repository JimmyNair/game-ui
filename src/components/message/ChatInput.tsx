import { Button, IconButton, InputBase, makeStyles } from "@material-ui/core"
import React, { ChangeEvent, FormEvent, useState } from "react"
import SendIcon from '@material-ui/icons/Send';
const useStyles = makeStyles( () => ({
    container:{
        width: "auto",
        height: "auto"
    },

    textBox: {
        width: "85%",
        marginLeft: "5px",
        fontSize: "20px"
    },
    button:{
        padding: "10"
    }
}))

type ChatInputPropsType = {
    send: Function
}

export const ChatInput = (props: ChatInputPropsType) => {
    const classes = useStyles();
    const [message, setMessage] = useState("");

    const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement> ) => {
        setMessage(event.currentTarget.value)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        props.send(message);
        setMessage("")
    }
    
    return <form className={classes.container} noValidate onSubmit={handleSubmit} >
        
        <InputBase className={classes.textBox} placeholder="Start typing..." inputProps={{"aria-label": "start typing ..."}} onChange={handleTextChange} value={message} />
        <IconButton className={classes.button} color="primary" aria-label="send">
            <SendIcon />
        </IconButton>
    </form>
}