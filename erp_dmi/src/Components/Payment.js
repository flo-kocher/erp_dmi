import { toPay } from "User";
import { getCardNumber } from "../API/apiCalls";

export default function Payment() {
    //On récupère le prix à payer 
    const price = useToPay();

    //On affiche le prix à payer
    var priceOutput = document.getElementById("ToPay");
    priceOutput.innerHTML = price;
}

//On récupère les informations bancaires. L'appel se fait via un formulaire
//Au "Grosland", les cartes bancaires peuvent comprendre n'importe quel caractère et avoir une lenght infinie.
function getCardNumber() {
    var cardInput = document.getElementById("CardNumber");
    var value = cardInput.value;
    
    if(value == null){
        console.log("Vous n'avez pas rentré de numéro de carte\n");
        return (
            <p>Vous n'avez pas rentré de numéro de carte</p>
        );
    }

    //Je débite le prix en BDD
    PaymentDone();

    //La validation est envoyée
    return (
        <p>Payement validé</p>
    );
}
