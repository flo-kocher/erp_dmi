import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import { IoMdCash, IoMdCheckmarkCircleOutline, IoMdClose  } from 'react-icons/io';
import {Link} from "react-router-dom";
import { putConfirmationRDVFromId, putConfirmationPaiementFromId } from "../API/apiLocal";

/* Grille d'informations */
export function MedicalActData(props) {
      const champs_avant_confirmation = [
        { label: 'hospital_id', value: props.hospital_id },
        { label: 'mutuelle_id', value: props.mutuelle_id },
        { label: 'date_prevue', value: props.date_prevue },
        { label: 'metadata_1', value: props.metadata_1 }
      ];
      const champs_apres_confirmation = [
        { label: 'hospital_id', value: props.hospital_id },
        { label: 'mutuelle_id', value: props.mutuelle_id },
        { label: 'date_prevue', value: props.date_prevue },
        { label: 'date_venue', value: props.date_venue },
        { label: 'metadata_1', value: props.metadata_1 },
        { label: 'metadata_2', value: props.metadata_2 },
        { label: 'commentaire', value: props.commentaire },
        { label: 'montant_total', value: props.montant_total },
        { label: 'pourcentage_prise_en_charge', value: props.pourcentage_prise_en_charge },
        { label: 'prise_en_charge_hopital', value: props.prise_en_charge_hopital },
        { label: 'prise_en_charge_mutuelle', value: props.prise_en_charge_mutuelle },
        { label: 'prise_en_charge_patient', value: props.prise_en_charge_patient },
      ];

      const regexForHopital = /^.*_hopital$/;
      const regexForMutuelle = /^.*_mutuelle$/;
      const regexForPatient = /^.*_patient$/;
      const currentDate = new Date();

      return (
        <Paper
          sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 600,
            flexGrow: 1,
            textAlign: 'left',
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
            <Grid container spacing={2} direction="column">
            {
                /* Affichage des informations pour l'acte médical*/
                (props.date_venue >= currentDate.toISOString() &&
                champs_avant_confirmation.map((field, index) => (
                <Grid item key={index}>
                    <Typography variant={'body1'} gutterBottom component="div">
                    {field.label} {" : " + field.value}

                    {/* Informations sur le remboursement de l'hopital X ou check */}
                    {regexForHopital.test(field.label) && (<IoMdCheckmarkCircleOutline size={32} />)}

                    {/* Informations sur le remboursement de la mutuelle du client X ou check */}
                    {regexForMutuelle.test(field.label)  && props.confirmation_mutuelle == true && (<IoMdCheckmarkCircleOutline size={32} />)}
                    {regexForMutuelle.test(field.label)  && props.confirmation_mutuelle == false && (<IoMdClose size={32} />)}

                    {/* Informations sur le paiement du client X ou check */}
                    {regexForPatient.test(field.label)  && props.confirmation_paiement_patient == true && (<IoMdCheckmarkCircleOutline size={32} />)}
                    {regexForPatient.test(field.label)  && props.confirmation_paiement_patient == false && (<IoMdClose size={32} />)}
                    </Typography>

                </Grid>
                )))
                ||
                (
                  props.date_venue < currentDate.toISOString() &&
                  champs_apres_confirmation.map((field, index) => (
                    <Grid item key={index}>
                        <Typography variant={'body1'} gutterBottom component="div">
                        {field.label} {" : " + field.value}
                        </Typography>

                    </Grid>
                  ))
                )
            }

            {/* Si le paiement n'est pas validé affichage du bouton de paiement */}
            {(props.date_venue < currentDate.toISOString() &&
            !props.confirmation_paiement_patient && (
            <Grid item>
              <Typography variant={'body1'} gutterBottom component="div">
                {"Paiement : "}

                <Link to={{}} state={props}>
                <ButtonBase onClick={() => putConfirmationPaiementFromId(props.id, true)} sx={{ width: 128, height: 128 }}>
                        <IoMdCash size={32} />
                </ButtonBase>
                </Link>
              </Typography>
            </Grid>
            ))
            ||/*affichage pour confirmation*/
            (
              !props.confirmation_rdv && props.date_venue >= currentDate.toISOString() &&(
                <Grid item>
                <Typography variant={'body1'} gutterBottom component="div">
                  {"Confirmation RDV : "}

                  <Link to={{}} state={props}>
                  <ButtonBase onClick={() => putConfirmationRDVFromId(props.id, true)} sx={{ width: 128, height: 128 }}>
                          <IoMdCheckmarkCircleOutline size={32} />
                  </ButtonBase>
                  </Link>
                </Typography>
              </Grid>
              )
            )
            ||
            (
              (props.date_venue < currentDate.toISOString() &&
              props.confirmation_paiement_patient && (
              <Grid item>
                <Typography variant={'body1'} gutterBottom component="div">
                  {"Paiement : "}

                  <ButtonBase sx={{ width: 128, height: 128 }}>
                    <IoMdCheckmarkCircleOutline size={32} />
                  </ButtonBase>
                </Typography>
              </Grid>
            ))
            )}
          </Grid>
        </Paper>
    );
}

