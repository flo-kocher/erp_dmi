import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from "react-router-dom";

export function MedicalActGrid(props) {
    console.log('here')
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