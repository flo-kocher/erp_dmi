import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import {Link} from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";

import { putConfirmationPaiementFromId } from "../API/apiLocal";
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

// Paiement d'un acte médical
function Payment(props) {
    let { state } = useLocation();
    let navigate = useNavigate();
    return (
        <div className="Payment">
            <a onClick={() => navigate(-1)}>Retour</a>
            <h1>
                Paiement de {state.prise_en_charge_patient} euros
            </h1>
            {/* Informations sur le paiement*/}

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
                            <Grid item>
                            <Typography variant={'body1'} gutterBottom component="div">
                                {"Valider le Paiement :"}

                                {
                                    !props.confirmation_paiement_patient &&
                                    (
                                        <Link to={{}} state={props}>
                                        <ButtonBase onClick={() => putConfirmationPaiementFromId(props.id, true)} sx={{ width: 128, height: 128 }}>
                                            <IoMdCheckmarkCircleOutline size={32} />
                                        </ButtonBase>
                                        </Link>
                                    )
                                }
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
        </div>
    );
}

export default Payment;
