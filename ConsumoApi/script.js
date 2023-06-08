//const API_URL = 'http://localhost:3000/pessoas';
const API_URL = 'https://jsonserver.vvgdf.repl.co/pessoas';


async function createUser(data) {
    let json
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        json = await response.json()
    } catch (error) {
        console.log(`HTTP error! status: ${response.status}`)
    }
    if (json)
        return json
}

async function create() {
    clearData()
    let response = document.getElementById("response")
    console.log('Inserindo dados...')
    const objectUser = {
        id: 11,
        Gender: 'female',
        Title: 'Mrs.',
        GivenName: 'Fabiana',
        MiddleInitial: 'G',
        Surname: 'Ribeiro',
        StreetAddress: 'Rua Felicidade 123',
        City: 'Itú',
        State: 'SP',
        StateFull: 'São Paulo',
        ZipCode: '12954-018',
        EmailAddress: 'pedropaulo@mail.com',
        Telephoneid: '(11) 9696-1234',
        Birthday: '12/20/2000',
        TropicalZodiac: 'Capricórnio',
        NationalID: '751.539.390-15',
        Color: 'Blue',
        Occupation: 'Network administrator',
        Company: 'Mac Donalds',
        Vehicle: '2015 Honda Fit',
        BloodType: 'A+',
        Kilograms: 76.6,
        Centimeters: 168,
        Latitude: -23203607,
        Longitude: -46497159
    }
    const data = await createUser(objectUser)

    if (JSON.stringify(data) === '{}') {
        let li = document.createElement("li");
        li.innerHTML = 'Não foi possível inserir o registro'
        response.appendChild(li);
    } else {
        for (var [key, value] of Object.entries(data)) {
            let li = document.createElement("li")
            li.innerHTML = key + ": " + value
            response.appendChild(li)
        }
    }
}

async function readUser(userId) {
    let json
    try {
        const response = await fetch(`${API_URL}/${userId}`);
        json = await response.json()
    } catch (error) {
        console.log(`HTTP error! status: ${response.status}`)
    }
    if (json)
        return json
}

async function read() {
    clearData()
    let response = document.getElementById("response")
    console.log('Buscando dados...')
    const data = await readUser(11)
    console.log(data)

    if (JSON.stringify(data) === '{}') {
        let li = document.createElement("li");
        li.innerHTML = 'Registro vazio.'
        response.appendChild(li);
    } else {
        for (var [key, value] of Object.entries(data)) {
            let li = document.createElement("li")
            li.innerHTML = key + ": " + value
            response.appendChild(li)
        }
    }
}

async function updateUser(data) {
    let id = (data.id)
    let json
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        json = await response.json()
    } catch (error) {
        console.log(`HTTP error! status: ${response.status}`)
    }
    if (json)
        return json
}

async function update() {
    clearData()
    let response = document.getElementById("response")
    console.log('Atualizando dados...')
    const objectUser = {
        id: 11,
        Gender: 'male',
        Title: 'Mr.',
        GivenName: 'Pedro',
        MiddleInitial: 'H',
        Surname: 'Guimarães',
        StreetAddress: 'Rua Felicidade 123',
        City: 'Itú',
        State: 'SP',
        StateFull: 'São Paulo',
        ZipCode: '12954-018',
        EmailAddress: 'pedropaulo@mail.com',
        Telephoneid: '(11) 9696-1234',
        Birthday: '12/20/2000',
        TropicalZodiac: 'Capricórnio',
        NationalID: '751.539.390-15',
        Color: 'Blue',
        Occupation: 'Network administrator',
        Company: 'Mac Donalds',
        Vehicle: '2015 Honda Fit',
        BloodType: 'A+',
        Kilograms: 76.6,
        Centimeters: 168,
        Latitude: -23203607,
        Longitude: -46497159
    }
    const data = await updateUser(objectUser)

    if (JSON.stringify(data) === '{}') {
        let li = document.createElement("li");
        li.innerHTML = 'Não foi possível atualizar o registro'
        response.appendChild(li);
    } else {
        for (var [key, value] of Object.entries(data)) {
            let li = document.createElement("li")
            li.innerHTML = key + ": " + value
            response.appendChild(li)
        }
    }
}

async function delUser(userId) {
    let json
    try {
        let response = await fetch(`${API_URL}/${userId}`, {
            method: 'DELETE'
        });
        json = await response.json()
    } catch (error) {
        console.log(`HTTP error! status: ${response.status}`)
    }
    if (json)
        return json
}

async function del() {
    clearData()
    let response = document.getElementById("response")
    console.log('Removendo dados...')
    const data = await delUser(11)

    if (JSON.stringify(data) === '{}') {
        let li = document.createElement("li");
        li.innerHTML = 'Registro removido com sucesso.'
        response.appendChild(li);
    } else {
        let li = document.createElement("li");
        li.innerHTML = 'Não foi possível remover o registro.'
        response.appendChild(li);
    }
}

const clearData = () => {
    let data = document.getElementById("response")
    if (data) data.innerHTML = '';
}

document.getElementById("btn_create").addEventListener('click', create)
document.getElementById("btn_read").addEventListener('click', read)
document.getElementById("btn_update").addEventListener('click', update)
document.getElementById("btn_delete").addEventListener('click', del)