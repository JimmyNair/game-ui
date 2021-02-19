import { makeStyles } from "@material-ui/core"
import React, { useState } from "react"
import { ChatInput } from "../components/message/ChatInput"
import { ChatWindow } from "../components/message/ChatWindow"

const useStyles = makeStyles( () => ({
    root: {
       width: "100%",
       height: "100%"
    },

    container: {
        width: "100%",
        maxWidth: "480px",
        margin: "10% auto",
        border: "1px solid black"
    }
}))
export const Message = () => {
    const classes = useStyles();
    const [chatLog, setChatLog] = useState<Array<string>>([])

    const addToChatLog = (message: string) => {
        let currentChatLog = [...chatLog];
        currentChatLog.push(message);
        setChatLog(currentChatLog);
    }
    
    return <div className={classes.root}>
        <div className={classes.container}>
        <ChatWindow messages={chatLog}/>
        <ChatInput send={addToChatLog} />

        </div>
    </div>
}