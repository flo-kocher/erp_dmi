import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import { IoMdCash, IoMdCheckmarkCircleOutline, IoMdClose  } from 'react-icons/io';
import {Link} from "react-router-dom";
import { getMedicalActFromId, putConfirmationRDVFromId } from "../API/apiCalls";

/* Grille d'informations */
export function MedicalActGrid(props) {
    // console.log('here')
    // console.log(props)
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
                (!props.confirmation_rdv &&
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
                  props.confirmation_rdv && 
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
            {(props.confirmation_rdv &&
            !props.confirmation_paiement_patient && (
            <Grid item>
              <Typography variant={'body1'} gutterBottom component="div">
                {"Paiement : "}

                <Link to={'/pages/MedicalActs/'+ props.id + '/payment'} state={props}>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                        <IoMdCash size={32} />
                </ButtonBase>
                </Link>
              </Typography>
            </Grid>
            ))
            ||/*affichage pour confirmation*/
            (
              !props.confirmation_rdv &&(
                <Grid item>
                <Typography variant={'body1'} gutterBottom component="div">
                  {"Confirmation RDV : "}

                  <Link to={'/pages/MedicalActs/'+ props.id + '/form'} state={props}>
                  <ButtonBase onClick={() => putConfirmationRDVFromId(props.id, true)} sx={{ width: 128, height: 128 }}>
                          <IoMdCheckmarkCircleOutline size={32} />
                  </ButtonBase>
                  </Link>
                </Typography>
              </Grid>
              )
            )}
          </Grid>
        </Paper>
    );
}

/* Récupères les informations sur l'acte médical */
export function CreateMedicalActGrid(props) {
    // console.log(props.data)
    const act = getMedicalActFromId(props.data);
    return (
        <MedicalActGrid
            vide = {" "}
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