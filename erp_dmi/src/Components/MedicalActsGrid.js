import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from "react-router-dom";
import {data, hospitals_data} from "../API/testDatas";
import {useUser} from "../Context/userContext";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function getHospitalName(hospital_id) {
    const hospitals = hospitals_data;
    for(let i = 0; i < hospitals.length; i++) {
        if(hospitals[i].id === hospital_id)
            return hospitals[i].name;
    }
    return "Hôpital de secours";
}

// https://mui.com/material-ui/react-grid/#complex-grid

export function MedicalActsGrid(props) {
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
    const acts = data;
    const [user] = useUser();
    return (
        acts.map((act, index) => {
            if(act.user_id === user.id_graulande)
                return (
                    <MedicalActsGrid
                        key={act['id']}
                        id={act['id']}
                        date={act['date_prevue']}
                        location={getHospitalName(act['hospital_id'])}
                        intervention={act['metadata_1']}
                        comment={act['commentaire']}
                    />
                )
        })
    );
}
