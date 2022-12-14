 // 1 es piedra
        // 2 es papel
        // 3 es tijera
        function numAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function opElegida(jugada) {
            let resultado = "";
            
            if(jugada == 1) {
            resultado ="Piedra 🪨";
        } else if(jugada == 2) {
            resultado ="Papel 📰";
        }else if(jugada == 3){
            resultado ="Tijera ✂️";
        } else {
            resultado ="MALA ELECCIÓN";
        }
        return resultado;
        }
        
        let jugador = 0;
        let pc = 0;

        let triunfos = 0;
        let perdidas = 0;
        let empate = 0;

        function combate(pcElige, jugadorElige) {
            let preliminar = "";
            //COMBATE
            if(pcElige == jugadorElige) {
                preliminar = "E M P A T E";
                empate = empate + 1;
            } else if(jugadorElige == 1 && pcElige == 3 || jugadorElige == 2 && pcElige == 1 || jugadorElige == 3 && pcElige == 2) {
                preliminar = "G A N A S T E";
                triunfos = triunfos + 1;
            }
            else {
                preliminar = "PERDISTE";
                perdidas = perdidas + 1;
            }
            return preliminar;
        }

        // mientras triunfos sea menor que 3 y perdidas sea menor que 3
        while(triunfos < 3 && perdidas < 3) {
            pc = numAleatorio(1,3);
            jugador = prompt("Elige: 1 para Piedra 🪨, 2 para Papel 📰, 3 para tijera ✂️");
            
            alert("PC elige: " + opElegida(pc));
            alert("Tú eliges: " + opElegida(jugador));
            alert(combate(pc, jugador));

            
        }
        alert("GANASTE " + triunfos + " veces. Perdiste " + perdidas + "veces." + "Empates: " + empate);
