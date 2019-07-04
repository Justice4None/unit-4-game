var characterSelected = false;
var defenderSelected = false;
var character = {};
var defender = {};
var enemiesDefeated = 0;
gameOver = false;

var obiWanKenobi = {
    name: "Obi-Wan Kenobi",
    health: 120,
    baseAttack: 8,
    attack: 8
};

var lukeSkywalker = {
    name: "Luke Skywalker",
    health: 100,
    baseAttack: 5,
    attack: 5
};

var darthVader = {
    name: "Darth Vader",
    health: 125,
    baseAttack: 20,
    attack: 20
};

var darthMaul = {
    name: "Darth Maul",
    health: 100,
    baseAttack: 12,
    attack: 12
}

function initializeCharacter(chosenCharacter) {
    character.name = chosenCharacter.name;
    character.health = chosenCharacter.health;
    character.baseAttack = chosenCharacter.baseAttack;
    character.attack = chosenCharacter.attack;
}
function initializeDefender(chosenDefender) {
    defender.name = chosenDefender.name;
    defender.health = chosenDefender.health;
    defender.baseAttack = chosenDefender.baseAttack;
    defender.attack = chosenDefender.attack;
}

function moveToEnemies() {
    $(".available-character").removeClass("available-character").addClass("enemy-character");
    $("#enemies-available").append($(".enemy-character"));
}

function resetGame() {
    $("#obi-wan-kenobi-character").children(".health").html(obiWanKenobi.health);
    $("#luke-skywalker-character").children(".health").html(lukeSkywalker.health);
    $("#darth-vader-character").children(".health").html(darthVader.health);
    $("#darth-maul-character").children(".health").html(darthMaul.health);

    $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
    var available = $(".available-character").show();
    $("#characters-available").html(available);

    $("#game-message").empty();
    $("#game-restart").hide();

    characterSelected = false;
    defenderSelected = false;
    enemiesDefeated = 0;
    gameOver = false;

    character = {};
    defender = {};
}

