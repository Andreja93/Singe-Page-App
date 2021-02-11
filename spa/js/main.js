let mainBody = document.querySelector('#main-body');
DB.getAll().then((data)=>{
    createTable(data);
},(err)=>{
    console.log(err);
})


function createTable(data) {
    let text = ``;

    for (var i = 0; i < data.lenght; i++){
        text += `
        <tr>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].deposit}</td>
            <td>${data[i].credit_card}</td>
        </tr>
`;
    }
    mainBody.innerHTML = text;
}
