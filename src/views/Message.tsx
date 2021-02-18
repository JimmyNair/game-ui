import { makeStyles } from "@material-ui/core"
import React, { useState } from "react"
import { ChatInput } from "../components/message/ChatInput"
import { ChatWindow } from "../components/message/ChatWindow"

const useStyles = makeStyles( () => ({
    root: {
        width: "50%",
        minHeight: "200px",
        padding: "5px auto"
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
        <ChatWindow messages={chatLog}/>
        <ChatInput send={addToChatLog} />
    </div>
}