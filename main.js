
console.log("get some pets!");

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const critters = [
    {
        image: 'https://live.staticflickr.com/155/354864230_a8fe1fe864_z.jpg',
        name: 'Winston',
        color: 'Grey and White',
        specialSkill: 'Toilet trained',
        typeOfPet: 'Cat'
    },
    {
        image: 'https://live.staticflickr.com/251/462802956_28209e70c6_b.jpg',
        name: 'Beilfus',
        color: 'Orange',
        specialSkill: 'Befriends household bugs',
        typeOfPet: 'Cat'
    },
    {
        image: 'https://live.staticflickr.com/730/21225816748_c41918293d_b.jpg',
        name: 'Money Bags',
        color: 'Brown',
        specialSkill: 'Accountant',
        typeOfPet: 'Dog'
    },
    {
        image: 'https://live.staticflickr.com/371/31905345324_d5dd230dfa_b.jpg',
        name: 'Todd',
        color: 'Brown and White',
        specialSkill: 'Steals your girl',
        typeOfPet: 'Dog'
    },
    {
        image: 'https://live.staticflickr.com/4873/31791976967_16b1b39999_b.jpg',
        name: 'Claudia',
        color: 'Black, White, and Brown',
        specialSkill: 'Poos on command',
        typeOfPet: 'Dog'
    },
    {
        image: 'https://live.staticflickr.com/8211/8314552558_4837466a47_b.jpg',
        name: 'Denver',
        color: 'Green',
        specialSkill: 'He\'s my friend and a whole lot more',
        typeOfPet: 'Dino'
    }
];

const printPets = (petArr) => {
    let petText = '';
    for (let i = 0; i < petArr.length; i++) {
        const pet = petArr[i];
        petText += `
            <div class="petCards ${pet.typeOfPet}">
            <header><h3>${pet.name}</h3></header>
            <div class="cardBody"><img src="${pet.image}" alt="${pet.name} the ${pet.typeOfPet}" />
            <p>Color: ${pet.color}</p>
            <p>Special Skill: ${pet.specialSkill}</p></div>
            <footer><p>${pet.typeOfPet}</p></footer>
            </div>
        `
    };
    printToDom('animalCards', petText);
};

printPets(critters);

const clickPetBtn = (e) => {
    const petBtnType = e.target.id;
    const petTypeArr = [];
    for (let i = 0; i < critters.length; i++) {
        const petObject = critters[i];
        if (petBtnType === petObject.typeOfPet) {
            petTypeArr.push(petObject)
        }
    }
    printPets(petTypeArr);
}

document.getElementById(critters[0].typeOfPet).addEventListener('click', clickPetBtn);
document.getElementById(critters[3].typeOfPet).addEventListener('click', clickPetBtn);
document.getElementById(critters[5].typeOfPet).addEventListener('click', clickPetBtn);
document.getElementById('allButton').addEventListener('click', (e) => {
    printPets(critters);
}   );