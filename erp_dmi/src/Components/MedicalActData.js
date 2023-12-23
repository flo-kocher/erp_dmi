import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import { IoMdCash, IoMdCheckmarkCircleOutline, IoMdClose  } from 'react-icons/io';
import { Link } from "react-router-dom";
import { putConfirmationRDVFromId, putConfirmationPaiementFromId } from "../API/apiLocal";
import { useState, useEffect } from "react";

/**
 * Visualisation de l'ensemble des données lié à un acte médical dans une Card/Paper.
 * Les informations affichés sont soit celles d'un acte confirmé, soit celle d'un acte en cours de confirmation.
 * @param act
 * @param champs_avant_confirmation
 * @param champs_apres_confirmation
 * @returns {JSX.Element}
 * @constructor
 */
export function MedicalActData({act, champs_avant_confirmation, champs_apres_confirmation}) {
	const regexForHopital = /^.*_hopital$/;
	const regexForMutuelle = /^.*_mutuelle$/;
	const regexForPatient = /^.*_patient$/;
	const currentDate = new Date();
	console.log(act.date_venue);
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
                ((!act.date_venue || act.date_venue >= currentDate.toISOString()) &&
                champs_avant_confirmation.map((field, index) => (
                <Grid item key={index}>
                    <Typography variant={'body1'} gutterBottom component="div">
                    <span style={{ fontWeight: 'bold' }}>{field.label + " : "}</span> {field.value}
                    </Typography>

                </Grid>
                )))
                ||
                (
					act.date_venue < currentDate.toISOString() &&
                  	champs_apres_confirmation.map((field, index) => (
                    <Grid item key={index}>
                        <Typography variant={'body1'} gutterBottom component="div">
                            <span style={{ fontWeight: 'bold' }}>{field.label + " : "}</span> {field.value}
                        </Typography>

                    </Grid>
                  ))
                )
            }

            {/* Si le paiement n'est pas validé affichage du bouton de paiement */}
            {(act.date_venue < currentDate.toISOString() &&
            !act.confirmation_paiement_patient && (
            <Grid item>
              <Typography variant={'body1'} gutterBottom component="div">
                {"Paiement : "}

                <Link to={{}} state={act}>
                <ButtonBase onClick={() => putConfirmationPaiementFromId(act, true)} sx={{ width: 128, height: 128 }}>
                        <IoMdCash size={32} />
                </ButtonBase>
                </Link>
              </Typography>
            </Grid>
            ))
            ||/*affichage pour confirmation*/
            (
              !act.confirmation_rdv && (!act.date_venue || act.date_venue >= currentDate.toISOString()) &&(
                <Grid item>
                <Typography variant={'body1'} gutterBottom component="div">
                  {"Confirmation RDV : "}

                  <Link to={{}} state={act}>
                  <ButtonBase onClick={() => putConfirmationRDVFromId(act, true)} sx={{ width: 128, height: 128 }}>
                          <IoMdCheckmarkCircleOutline size={32} />
                  </ButtonBase>
                  </Link>
                </Typography>
              </Grid>
              )
            )
            ||
            (
              (act.date_venue < currentDate.toISOString() &&
              act.confirmation_paiement_patient && (
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

