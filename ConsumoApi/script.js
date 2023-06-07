//const API_URL = 'http://localhost:3000/pessoas';
const API_URL = 'https://jsonserver.vvgdf.repl.co/pessoas';


async function getUser(userId) {
    let response = await fetch(`${API_URL}/${userId}`);
    if (!response.ok) 
        throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
}

async function delUser(userId) {
    let response = await fetch(`${API_URL}/${userId}`, {method: 'DELETE'});
    if (!response.ok) 
        throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
}

async function setUser(data) {
    const response = await fetch(API_URL, {method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });
    if (!response.ok) 
        throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
}

async function updateUser(data,event) {
    let id = (data.id)
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });
    if (!response.ok) 
        throw new Error(`HTTP error! status: ${response.status}`)
   return await response.json()
}

async function getData() {
    console.log('Retornando dados...')
    const user = await getUser(11)
    console.log(user)
    let response = document.getElementById("response")

    for (var [key, value] of Object.entries(user)) {
        let li = document.createElement("li");
        li.innerHTML = key + ": " + value
        response.appendChild(li);
    } 
}

async function delData() {
    console.log('Removendo dados...')
    console.log(await delUser(11))
}

async function setData() {
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
    console.log(await setUser(objectUser))
}

async function updateData(event) {
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
    
    
    const data = await updateUser(objectUser,event)

    console.log(event)
    
    let response = document.getElementById("response")


    for (var [key, value] of Object.entries(data)) {   
        let li = document.createElement("li");
        li.innerHTML = key + ": " + value
        response.appendChild(li);
    } 
    
    
}

document.getElementById("btn_getData").addEventListener('click', getData)
document.getElementById("btn_setData").addEventListener('click', setData)
document.getElementById("btn_updateData").addEventListener('click', updateData, false)
document.getElementById("btn_delData").addEventListener('click', delData)
