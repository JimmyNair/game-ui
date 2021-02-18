import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles( () => ({
    window: {
        
        border: "1px solid grey"
    }
}))

type ChatWindowPropsType = {
    messages: Array<string>
}

export const ChatWindow = (props: ChatWindowPropsType) => {
    const classes = useStyles();
    return <div className={classes.window}>
        <ul>
        {props.messages.map( eachMessage => <li>{eachMessage}</li> )}

        </ul>

    </div>
}