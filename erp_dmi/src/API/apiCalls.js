const checkStatus = (res) => {
    if (res.ok) {
        return res;
    } else {
        return res.text().then((msg) => {
            throw new Error(msg);
        });
    }
};

//EXEMPLE DE FONCTION 
export const signup = ({ firstname, name, password, idGr, email, phoneNumber }) => {
    fetch("http://localhost:4200/signup", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, name, password, idGr, email, phoneNumber }),
    });
};

  export const signin = ({ idGr, password }) => {
    fetch(`http://localhost:4200/signin`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ idGr, password }),
    })
        .then(checkStatus)
        .then((res) => res.json());
};