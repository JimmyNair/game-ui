import { InputBase, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { ChatInput } from "../components/message/ChatInput";
import { ChatWindow } from "../components/message/ChatWindow";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
  },

  container: {
    width: "100%",
    maxWidth: "480px",
    margin: "10% auto",
    border: "1px solid black",
  },

  nameBox: {
    width: "85%",
    marginLeft: "5px",
    fontSize: "20px",
  },
}));
export const Message = () => {
  const classes = useStyles();
  const [chatLog, setChatLog] = useState<Array<string>>([]);
  const [name, setName] = useState("");

  const addToChatLog = (message: string) => {
    let currentChatLog = [...chatLog];
    currentChatLog.push(message);
    setChatLog(currentChatLog);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setName(event.currentTarget.value);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <InputBase
          className={classes.nameBox}
          placeholder="My name is ..."
          inputProps={{ "aria-label": "My name is ..." }}
          onChange={handleTextChange}
          value={name}
        />
        <ChatWindow name={name} messages={chatLog} />
        <ChatInput send={addToChatLog} />
      </div>
    </div>
  );
};
