import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from "react-router-dom";
import { getMedicalActsList } from "../API/testDatas";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

// https://mui.com/material-ui/react-grid/#complex-grid

export function MedicalActsGrid(props) {
    console.log(props)
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
                        {/* Go to the medical act with ID : props.id */}
                        <Link to={`${props.id}/form`} state={props}>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                                <FaArrowRightLong/>
                            </ButtonBase>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export function CreateMedicalActsGrid() {
    const acts = getMedicalActsList();
    return (
        acts.map((act, index) => (
            <MedicalActsGrid
                key={act['id']}
                id={act['id']}
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
