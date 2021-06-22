let url = 'https://tt905-2021-backend.herokuapp.com/database'

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

async function callFetchWithPut(id, novoArtista,type,about){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body : JSON.stringify({
            'name' : novoArtista,
            'type' : type,
            'about' : about
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
    const Art = form[" Artista"].value;
    const typ = form["type"].value;
    const abou = form["about"].value;
   
    callFetchWithPost(Art,typ,abou);
    return false; // Evitar o reload da tela.
}

function submitPut(){
    const form = document.forms['putForm'];  
    const id = form["id"].value;  
    const novoArtist = form[" Artista"].value;
    const novotype = form["type"].value;
    const novoabout = form["about"].value;
    
    callFetchWithPut(id, novoArtist,novotype,novoabout);
    return false; // Evitar o reload da tela.
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const id = form["id"].value;  
    callFetchWithDelete(id);
    return false; // Evitar o reload da tela.
}
