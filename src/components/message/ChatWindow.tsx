import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  window: {
    height: "80%",
    minHeight: "300px",
    border: "1px solid grey",
  },
}));

type ChatWindowPropsType = {
  name: string;
  messages: Array<string>;
};

export const ChatWindow = (props: ChatWindowPropsType) => {
  const classes = useStyles();
  return (
    <div className={classes.window}>
      {props.messages.map((eachMessage: string, index: number) => (
        <div key={"message_" + index}>
          {props.name} : <span>{eachMessage}</span>
        </div>
      ))}
    </div>
  );
};
