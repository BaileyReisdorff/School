class Member {
    constructor(name, gem, price) {
        this.name = name;
        this.gem = gem;
        this.price = price;
    }
}

class Team {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.members = [];
    }

    addMember(member) {
        this.members.push(member);
    }

    deleteMember(member) {
        let index = this.members.indexOf(member);
        this.members.splice(index, 1);
    }
}

let teams = [];
let teamId = 0;

onClick('new-team', () => {
    teams.push(new Team(teamId++, getValue('new-team-name')));
    drawDOM();
});

function onClick(id, action) {
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;
}

function getValue(id) {
    return document.getElementById(id).value;
}

function drawDOM() {
    let teamDiv = document.getElementById('teams');
    clearElememt(teamDiv);
    for (team of teams) {
        let table = createTeamTable(team);
        let title = document.createElement('h2');
        title.innerHTML = team.name;
        title.appendChild(createDeleteTeamButton(team));
        teamDiv.appendChild(title);
        teamDiv.appendChild(table);
        for (member of team.members) {
            createMemberRow(team, table, member);
        }
    }
}

function createMemberRow(team, table, member) {
    let row = table.insertRow(2);
    row.insertCell(0).innerHTML = member.name;
    row.insertCell(1).innerHTML = member.gem;
    row.insertCell(2).innerHTML = member.price;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteRowButton(team, member));
}

function createDeleteRowButton(team, member) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-secondary';
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let index = team.members.indexOf(member);
        team.members.splice(index, 1);
        drawDOM();
    };
    return btn;
}

function createDeleteTeamButton(team) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-secondary';
    btn.innerHTML = 'Delete Category';
    btn.onclick = () => {
        let index = teams.indexOf(team);
        teams.splice(index, 1);
        drawDOM();
    };
    return btn;
} 

function createNewMemberButton(team) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-secondary';
    btn.innerHTML = 'Create Item';
    btn.onclick = () => {
        team.members.push(new Member(getValue(`name-input-${team.id}`), getValue(`gem-input-${team.id}`), getValue(`price-input-${team.id}`)));
        drawDOM();
    };
    return btn;
}

function createTeamTable(team) {
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-light table-striped');
    let row = table.insertRow(0);
    let nameColumn = document.createElement('th');
    let gemColumn = document.createElement('th');
    let priceColumn = document.createElement('th');
    let createColumn = document.createElement('th');
    nameColumn.innerHTML = 'Item Name';
    gemColumn.innerHTML = 'Gemstone';
    priceColumn.innerHTML = 'Price';
    row.appendChild(nameColumn);
    row.appendChild(gemColumn);
    row.appendChild(priceColumn);
    row.appendChild(createColumn);
    let formRow = table.insertRow(1);
    let nameTh = document.createElement('th');
    let gemTh = document.createElement('th');
    let priceTh = document.createElement('th');
    let createTh = document.createElement('th');
    let nameInput = document.createElement('input');
    nameInput.setAttribute('id', `name-input-${team.id}`);
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('class', 'form-control');
    let gemInput = document.createElement('input');
    gemInput.setAttribute('id', `gem-input-${team.id}`);
    gemInput.setAttribute('type', 'text');
    gemInput.setAttribute('class', 'form-control');
    let priceInput = document.createElement('input');
    priceInput.setAttribute('id', `price-input-${team.id}`);
    priceInput.setAttribute('type', 'text');
    priceInput.setAttribute('class', 'form-control');
    let newMemberButton = createNewMemberButton(team);
    nameTh.appendChild(nameInput);
    gemTh.appendChild(gemInput);
    priceTh.appendChild(priceInput);
    createTh.appendChild(newMemberButton);
    formRow.appendChild(nameTh);
    formRow.appendChild(gemTh);
    formRow.appendChild(priceTh);
    formRow.appendChild(createTh);
    return table;
}


function clearElememt(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}