//data test

/*
User data test
 */
export let users = [
    {
        id: 1,
        id_graulande: 101,
        password: "123456",
        name: "Kocher",
        first_name:	"Florentin",
        mutuelle_id: 1,
    },
    {
        id: 2,
        id_graulande: 102,
        password: "azerty",
        name: "Hari",
        first_name:	"Jean-Baptiste",
        mutuelle_id: 2,
    },
    {
        id: 3,
        id_graulande: 3,
        password: "123",
        name: "Brard",
        first_name:	"Thibault",
        mutuelle_id: 2,
    }
]

/*
Medical act data test
 */
export let data = [
    {
        "id": 1,
        "user_id": 101,
        "hospital_id": 201,
        "mutuelle_id": 301,
        "metadata_1": "Consultation générale",
        "metadata_2": "Examen de routine",
        "montant_total": 150.0,
        "prise_en_charge_hopital": 90.0,
        "prise_en_charge_mutuelle": 50.0,
        "prise_en_charge_patient": 10.0,
        "confirmation_paiement_patient": false,
        "confirmation_mutuelle": true,
        "confirmation_rdv": true,
        "pourcentage_prise_en_charge": 60,
        "commentaire": "Aucun problème détecté lors de l'examen.",
        "date_creation": "2023-12-08T14:02:59.069Z",
        "date_prevue": "2023-12-10T10:30:00.000Z",
        "date_venue": "2023-12-10T10:45:00.000Z"
    },
    {
        "id": 2,
        "user_id": 102,
        "hospital_id": 202,
        "mutuelle_id": 302,
        "metadata_1": "Radiographie du thorax",
        "metadata_2": "Contrôle post-opératoire",
        "montant_total": 280.0,
        "prise_en_charge_hopital": 150.0,
        "prise_en_charge_mutuelle": 100.0,
        "prise_en_charge_patient": 30.0,
        "confirmation_paiement_patient": false,
        "confirmation_mutuelle": true,
        "confirmation_rdv": false,
        "pourcentage_prise_en_charge": 75,
        "commentaire": "Bonne évolution après l'opération.",
        "date_creation": "2023-12-08T14:15:30.069Z",
        "date_prevue": "2023-12-10T09:45:00.000Z",
        "date_venue": "2023-12-10T10:00:00.000Z"
    },
    {
        "id": 3,
        "user_id": 101,
        "hospital_id": 201,
        "mutuelle_id": 303,
        "metadata_1": "Échographie abdominale",
        "metadata_2": "Douleurs persistantes",
        "montant_total": 200.0,
        "prise_en_charge_hopital": 120.0,
        "prise_en_charge_mutuelle": 80.0,
        "prise_en_charge_patient": 20.0,
        "confirmation_paiement_patient": true,
        "confirmation_mutuelle": true,
        "confirmation_rdv": false,
        "pourcentage_prise_en_charge": 70,
        "commentaire": "Aucune anomalie détectée à l'échographie.",
        "date_creation": "2023-12-08T14:30:45.069Z",
        "date_prevue": "2023-12-16T11:15:00.000Z",
        "date_venue": "2023-12-16T11:30:00.000Z"
    },
    {
        "id": 4,
        "user_id": 3,
        "hospital_id": 204,
        "mutuelle_id": 304,
        "metadata_1": "Analyses sanguines",
        "metadata_2": "Bilan de santé annuel",
        "montant_total": 80.0,
        "prise_en_charge_hopital": 60.0,
        "prise_en_charge_mutuelle": 40.0,
        "prise_en_charge_patient": 20.0,
        "confirmation_paiement_patient": false,
        "confirmation_mutuelle": true,
        "confirmation_rdv": true,
        "pourcentage_prise_en_charge": 75,
        "commentaire": "Tous les paramètres sanguins sont dans les normes.",
        "date_creation": "2023-12-08T14:45:15.069Z",
        "date_prevue": "2023-12-08T08:00:00.000Z",
        "date_venue": "2023-12-10T08:15:00.000Z"
    },
    {
        "id": 5,
        "user_id": 101,
        "hospital_id": 202,
        "mutuelle_id": 305,
        "metadata_1": "IRM cérébrale",
        "metadata_2": "Migraines fréquentes",
        "montant_total": 350.0,
        "prise_en_charge_hopital": 200.0,
        "prise_en_charge_mutuelle": 120.0,
        "prise_en_charge_patient": 30.0,
        "confirmation_paiement_patient": true,
        "confirmation_mutuelle": true,
        "confirmation_rdv": true,
        "pourcentage_prise_en_charge": 85,
        "commentaire": "Aucune lésion détectée à l'IRM.",
        "date_creation": "2023-12-08T15:00:30.069Z",
        "date_prevue": "2023-12-09T14:00:00.000Z",
        "date_venue": "2023-12-09T14:15:00.000Z"
    },
    {
        "id": 6,
        "user_id": 102,
        "hospital_id": 204,
        "mutuelle_id": 306,
        "metadata_1": "Chirurgie de la cataracte",
        "metadata_2": "Opération planifiée",
        "montant_total": 1200.0,
        "prise_en_charge_hopital": 800.0,
        "prise_en_charge_mutuelle": 300.0,
        "prise_en_charge_patient": 100.0,
        "confirmation_paiement_patient": true,
        "confirmation_mutuelle": true,
        "confirmation_rdv": true,
        "pourcentage_prise_en_charge": 85,
        "commentaire": "Chirurgie réussie, récupération attendue.",
        "date_creation": "2023-12-08T15:15:45.069Z",
        "date_prevue": "2023-12-11T12:30:00.000Z",
        "date_venue": "2023-12-11T12:45:00.000Z"
    },
    {
        "id": 7,
        "user_id": 102,
        "hospital_id": 202,
        "mutuelle_id": 307,
        "metadata_1": "Consultation cardiologue",
        "metadata_2": "Douleurs thoraciques",
        "montant_total": 120.0,
        "prise_en_charge_hopital": 80.0,
        "prise_en_charge_mutuelle": 30.0,
        "prise_en_charge_patient": 10.0,
        "confirmation_paiement_patient": true,
        "confirmation_mutuelle": true,
        "confirmation_rdv": true,
        "pourcentage_prise_en_charge": 75,
        "commentaire": "Aucun problème cardiaque détecté à la consultation.",
        "date_creation": "2023-12-08T15:30:00.069Z",
        "date_prevue": "2023-12-13T16:15:00.000Z",
        "date_venue": "2023-12-13T16:30:00.000Z"
    },
    {
        "id": 8,
        "user_id": 103,
        "hospital_id": 203,
        "mutuelle_id": 308,
        "metadata_1": "Kinésithérapie",
        "metadata_2": "Rééducation post-traumatique",
        "montant_total": 90.0,
        "prise_en_charge_hopital": 50.0,
        "prise_en_charge_mutuelle": 30.0,
        "prise_en_charge_patient": 10.0,
        "confirmation_paiement_patient": true,
        "confirmation_mutuelle": true,
        "confirmation_rdv": true,
        "pourcentage_prise_en_charge": 80,
        "commentaire": "Progrès notables dans la rééducation.",
        "date_creation": "2023-12-08T15:45:15.069Z",
        "date_prevue": "2023-12-16T11:00:00.000Z",
        "date_venue": "2023-12-16T11:15:00.000Z"
    },
    {
        "id": 9,
        "user_id": 3,
        "hospital_id": 203,
        "mutuelle_id": 309,
        "metadata_1": "Dentisterie",
        "metadata_2": "Extraction dentaire",
        "montant_total": 50.0,
        "prise_en_charge_hopital": 30.0,
        "prise_en_charge_mutuelle": 15.0,
        "prise_en_charge_patient": 5.0,
        "confirmation_paiement_patient": true,
        "confirmation_mutuelle": true,
        "confirmation_rdv": true,
        "pourcentage_prise_en_charge": 75,
        "commentaire": "Extraction effectuée sans complication.",
        "date_creation": "2023-12-08T16:00:30.069Z",
        "date_prevue": "2023-12-17T14:30:00.000Z",
        "date_venue": "2023-12-17T14:45:00.000Z"
    },
    {
        "id": 10,
        "user_id": 3,
        "hospital_id": 202,
        "mutuelle_id": 310,
        "metadata_1": "Consultation dermatologue",
        "metadata_2": "Éruption cutanée persistante",
        "montant_total": 80.0,
        "prise_en_charge_hopital": 50.0,
        "prise_en_charge_mutuelle": 25.0,
        "prise_en_charge_patient": 5.0,
        "confirmation_paiement_patient": false,
        "confirmation_mutuelle": true,
        "confirmation_rdv": false,
        "pourcentage_prise_en_charge": 75,
        "commentaire": "Traitement prescrit pour l'éruption cutanée.",
        "date_creation": "2023-12-11T16:15:45.069Z",
        "date_prevue": "2023-12-24T13:45:00.000Z",
        "date_venue": "2023-12-25T14:00:00.000Z"
    }
]

/*
Hospital data test
 */
export let hospitals_data = [
    {
        "id": 201,
        "name": "Hôpital de Strasbourg"
    },
    {
        "id": 202,
        "name": "Hôpital de Erstein"
    },
    {
        "id": 203,
        "name": "Hôpital d'Illkirch"
    },
    {
        "id": 204,
        "name": "Hôpital de Hautepierre"
    }
]

/*
Mutuelle data test
 */
export let mutuelles_data = [
    {
        "id": 1,
        "name": "MGEN"
    },
    {
        "id": 2,
        "name": "Maaf Santé"
    },
    {
        "id": 3,
        "name": "MMA"
    },
    {
        "id": 4,
        "name": "Swiss Life"
    },
    {
        "id": 5,
        "name": "Matmut"
    },
    {
        "id": 6,
        "name": "Groupama"
    },
    {
        "id": 7,
        "name": "Axa Santé"
    },
    {
        "id": 8,
        "name": "MAIF"
    },
    {
        "id": 9,
        "name": "Allianz Santé"
    }
]
