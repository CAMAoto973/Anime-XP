const Discord = require('discord.js'); //Ce que le bot à besoin /
const client = new Discord.Client(); //Que votre Bot est un nouvel utilisateur
var prefix = "/"; //Prefix de votre Bot ( /play www.youtube.com/ )
client.login(NzE3NTI0OTc3NTQ4NTI1NTc5.XteQwA.H5l3R_g7dOdWOYB2_TYMFhMZHc8); //Token (Série de chiffre) propre a chaque Bot
client.on("ready", () => { //Signifie que le bot à bien démarré console.log("Je suis prêt !"); //Lorsque que le bot est lancé observer la console Visual Studio client.user.setGame("s'Update seul"); //Voir le Jeu sur le Discord
});
