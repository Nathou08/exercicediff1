function converter(){
        var x = parseInt(document.getElementById("saisie").value);
        var select = document.getElementById("selection").value;
        var dollar = document.getElementById("dollar").value;
        var livre = document.getElementById("livre").value;
        var yen = document.getElementById("yen").value;
        
        if(select == dollar){
            document.getElementById("resultat").value = x*1.16998;
        }
        else if(select == livre){
            document.getElementById("resultat").value = x*0.89370;
        }
        else if(select == yen){
            document.getElementById("resultat").value = x*130.13900;
        }
}


