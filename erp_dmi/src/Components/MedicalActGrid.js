import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from "react-router-dom";
import { getMedicalActFromId } from "../API/testDatas";

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
                                {props.metadata_1}
                            </Typography>
                            <Typography gutterBottom variant="subtitle2" component="div">
                                {props.date_prevue} {props.hospital_id}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {props.prise_en_charge_hopital}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.commentaire}
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

export function CreateMedicalActGrid(props) {
    console.log(props.data)
    const act = getMedicalActFromId(props.data);
    return (
        <MedicalActGrid
            id = {act['id']}
            user_id = {act['user_id']}
            hospital_id = {act['hospital_id']}
            mutuelle_id = {act['mutuelle_id']}
            metadata_1 = {act['metadata_1']}
            metadata_2 = {act['metadata_2']}
            montant_total = {act['montant_total']}
            prise_en_charge_hopital = {act['prise_en_charge_hopital']}
            prise_en_charge_mutuelle = {act['prise_en_charge_mutuelle']}
            prise_en_charge_patient = {act['prise_en_charge_patient']}
            confirmation_paiement_patient = {act['confirmation_paiement_patient']}
            confirmation_mutuelle = {act['confirmation_mutuelle']}
            confirmation_rdv = {act['confirmation_rdv']}
            pourcentage_prise_en_charge = {act['pourcentage_prise_en_charge']}
            commentaire = {act['commentaire']}
            date_creation = {act['date_creation']}
            date_prevue = {act['date_prevue']}
            date_venue = {act['date_venue']}
        />
    );
}