import { API_URL } from "./ConfigApi";
//pega
export async function getCharacters () {
    const response= await fetch(`${API_URL}/Characters`);

    const data= await response.json();

    return data;
}
//cria
export async function createPerson(person) {

    const response= await fetch(`${API_URL}/Characters`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    });

    return response.json();
}

//atualiza

    export async function updatePerson(id, person) {
        
        const response= await fetch(`${API_URL}/Characters/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    });

    return response.json();

}

//delelta
export async function deletePerson(id) {
        
        await fetch(`${API_URL}/Characters/${id}`, {
        method: "DELETE",
      
    });
}