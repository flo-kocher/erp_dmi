# ERP_DMI

## Scénario type pour l'ensemble de l'application
- DMI : Création de compte / connexion compte existant
- DMI : Saisie Vérification des informations générales
- DMI : Saisie du Numéro Unique d’identifiant Graulandais
- DMI : Visualisation des rendez-vous hospitaliers. Ex : Scanner XZ le 11/11 à 10h
- DMI : Confirmation du rendez-vous hospitalier
- Le patient se rend à l’hôpital et passe son scanner
- L’Hôpital informe le DMI que le Scanner XZ a bien été effectué pour un cout de 100€, 50€ étant pris en charge par
l’hôpital. Le reste à charge par le patient est de 50€.
- L’Hôpital informe la mutuelle que le Scanner XZ a bien été effectué pour un cout de 100€, 50€ étant pris en charge par l’hôpital. Le reste à charge par le patient est de 50€.
- La Mutuelle confirme la bonne réception des données à l’Hôpital et fait un virement de 40€
- La Mutuelle informe le DMI de la prise en charge de 40€ par la Mutuelle réglé à l’Hôpital
- Le DMI affiche les versements et le solde de 10€ à régler par le patient, en lui proposant une fonctionnalité de paiement des 10€ à l’Hôpital.

## Description notre application

Création d’une application « SIH_DMI » permettant via une interface web responsive Mobile First de :
- Créer un compte : informations générales + Numéro Unique d’identifiant Graulandais
- Visualisation des actes médicaux prévus / passés par établissement
- Possibilité de confirmation des actes médicaux prévus
- Possibilité de voir le résultat des actes médicaux passés
- Possibilité de voir le détail financier des actes médicaux passés

- Possibilité de régler les actes médicaux
> -> faire un paiement fictif avec par exemple un bouton permettant de régler un solde, afficher une page avec le montant, laisser l'utilisateur saisir le montant et confirmer  
-> Ne pas oublier d'envoyer la confirmation ou refus ... au Middleware

- Communication avec l’HOPITAL


## Répartitions des tâches

