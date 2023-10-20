import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import { FaArrowRightLong } from "react-icons/fa6";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function getActList() {
    return [
        {
            'id': 1,
            'date': '01/01/2000',
            'location': 'Strasbourg',
            'intervention': 'Lorem ipsum est',
            'comment': "Je réalise un commentaire constructif",
            'price': 50,
            'support_price': 10,
            'remaining_price': 0
        },
        {
            'id': 2,
            'date': '22/12/2025',
            'location': 'Paris',
            'intervention': 'Ich bin deutsch',
            'comment': "Commentaire sur l'état de l'acte médical",
            'price': 200,
            'support_price': 20,
            'remaining_price': 0
        }
    ]
}

// https://mui.com/material-ui/react-grid/#complex-grid

export function CreateComplexGrid() {
    const acts = getActList();
    return (
        acts.map((act, index) => (
            <ComplexGrid
                key={act['id']}
                date={act['date']}
                location={act['location']}
                intervention={act['intervention']}
                comment={act['comment']}
                price={act['price']}
                support_price={act['support_price']}
                remaining_price={act['remaining_price']}
            />
        ))
    );
}

export function ComplexGrid(props) {
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid style={{textAlign: 'left'}} item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                {props.intervention}
                            </Typography>
                            <Typography gutterBottom variant="subtitle2" component="div">
                                {props.date} {props.location}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {props.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.comment}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            {/*Go to medical act*/}
                            <FaArrowRightLong/>
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
