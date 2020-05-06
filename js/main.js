console.log('hello');

function showSelect() {
    var cod = document.getElementById("shoes").value;
    
    
    console.log( cod );

   switch ( cod ) {
        case 'negro-rojo': console.log('hola bonito');
                changeImage(cod);
                changeColor("#DE2F46", "#FF3650")
                break;
        case 'blanco-rojo': console.log('blanco-rojo');
                changeImage(cod);
                changeColor("#e3e3e3", "#b83349")
                break;
        case 'negro-azul': console.log('negro-azul')
                changeImage(cod);
                changeColor("#413c39", "#a4e2eb")
                break;
        case 'blanco-negro': console.log('blanco-negro')
                changeImage(cod);
                changeColor("#e3e3e3", "#413c39")
                break;
        case 'space': console.log('space')
                changeImage(cod);
                changeColor("#413c39", "#445670")
                break;
        case 'vinotinto': console.log('vinotinto')
                changeImage(cod);
                changeColor("#1a0504", "#72303e")
                break;
   }
    function changeImage(attr){
        console.log('Llame una funciont')
        var img = document.getElementById("showroom");
        console.log(img);
            img.src = `img/${attr}.png`;
            img.setAttribute( "src", [`img/${attr}.png`]);
            console.log(img.src = `img/${attr}.png`)
    }   

    function changeColor (Color1, Color2) {
        var bg  = document.body;
        var card = document.getElementById('imgBox');
        var button = document.getElementById('buy');

        bg.style.backgroundColor = Color1;
        card.style.backgroundColor = Color2;
        button.style.backgroundColor = Color2;
    }
}