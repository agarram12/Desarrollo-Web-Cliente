let nombres = ["Pedro", "Lucía", "José", "Paula", "Juan"];
for (let i = 0; i <= nombres.length; i++) {
    if(nombres[i][0].toLowerCase() === "p") {
        nombres.splice(i,1);
    }
}

console.log("Nombres: " + nombres);