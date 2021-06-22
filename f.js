let url = 'https://tt905-2021-backend.herokuapp.com/database/'

async function callFetchWithGet(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json");
    const response = await fetch(url, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
}

async function callFetchWithPost( Artista,type,about){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body : JSON.stringify({
            'name' : Artista,
            'type' : type,
            'about' : about
        })
    }
    await fetch(url, options);
}

async function callFetchWithPut(id, Artista2,type2,about2){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body : JSON.stringify({
            'name' : Artista2,
            'type' : type2,
            'about' : about2
        })
    }
    await fetch(`${url}/${id}`, options);
}

async function callFetchWithDelete(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
    await fetch(`${url}${id}`, options);
}

/*
    Formulários
*/

function submitPost(){
    console.log("entrei na função");
    const form = document.forms['postForm'];    
    const Artista = form[" Artista"].value;
    const type = form["type"].value;
    const about = form["about"].value;
   
    allFetchWithPost(Artista,type,about);
    return false; // Evitar o reload da tela.
}

function submitPut(){
    const form = document.forms['putForm'];  
    const id = form["id"].value;  
    const Artista2 = form[" Artista2"].value;
    const type2 = form["type2"].value;
    const about2 = form["about2"].value;
    
    callFetchWithPut(id, Artista2, type2,about2);
    return false; // Evitar o reload da tela.
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const id = form["id"].value;  
    callFetchWithDelete(id);
    return false; // Evitar o reload da tela.
}
