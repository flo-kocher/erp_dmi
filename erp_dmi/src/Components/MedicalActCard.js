import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from "react-router-dom";
import {MedicalActsGridItem} from "./MedicalActsGridItem";
import {getHospitalName} from "../utils/medicalActsUtils";

export function MedicalActCard(props) {
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
                                {new Date(props.date).toLocaleString()}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {props.price} €
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

export function MedicalActGrid({data, hospitals, mutuelles}) {
    // console.log(data);
    return (
        Object.keys(data).map((key, index) => <>
                <h5 key={"hospital"+index}>{getHospitalName(Number(key), hospitals)}</h5>
                <MedicalActsGridItem key={"medicalAct"+index} data={data[key]} hospital_name={getHospitalName(Number(key), hospitals)} mutuelles={mutuelles}/>
            </>
        )
    );
}
