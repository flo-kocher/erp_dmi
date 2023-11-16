export const getMedicalActsList = () => {
    return [
        {
            'id': 1,
            'date': '01/01/2000',
            'location': 'Dr. House',
            'intervention': 'X_VMED_01',
            'comment': "Je réalise un commentaire constructif",
            'price': 50,
            'support_price': 10,
            'remaining_price': 50-10
        },
        {
            'id': 2,
            'date': '22/12/2025',
            'location': 'Domicile',
            'intervention': 'X_CONS_01',
            'comment': "Commentaire sur l'état de l'acte médical",
            'price': 200,
            'support_price': 180,
            'remaining_price': 200-180
        }
    ]
}
