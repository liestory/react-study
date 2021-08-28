import {AppBar, Box, Container, IconButton, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import './App.css';
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    }
}))

function App() {
    const classes = useStyles();
    return (
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start"
                                color="inherit"
                                aria-label="menu"
                                className={classes.menuButton}>
                        <MenuIcon/>

                    </IconButton>
                    <Typography variant="h5" className={classes.title}> Обучение React </Typography>
                    <Box mr={3}>
                        <Button color="inherit" variant="outlined"> Вход </Button>
                    </Box>
                    <Button color="secondary" variant="contained"> Регистрация </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default App;
