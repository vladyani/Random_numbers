const result = [];

function lotery() {
    if (result.length === 6) {
        
        var buttonReload = document.querySelector('.reload_button');
        buttonReload.style.display = 'block';
        buttonReload.addEventListener("click", refreshPage);
        function refreshPage() {
            location.reload();
        }

        return;
    }

    const resultLotery = Math.floor(Math.random() * 49 + 1); //losuje nam liczbe losowa od 1 do 49 

    for (let i = 0; i < result.length; i++) { //jesli uzyskamy te same liczby w losowaniu zatrzymaj petle i zwroc od nowa nasza funkcje losowanie 
        if (resultLotery === result[i]) { //warunek jesli liczba losowana jest rowna tej w tablicy to wykonaj nastepujaca instrukcje czyli zwroc funkcje lotery() od nowa
            console.log("ta sama liczba");
            return lotery();
        }
    }

    const div = document.createElement('div'); //dostajemy sie do obiektu document i dodajemy nowy element do html 
    div.textContent = resultLotery;
    document.body.appendChild(div); //w tej linijce dostajemy sie do document potem do body i tam dodajemy mu jako dziecko appendChild(div)  któ®y stworzylismy 
    result.push(resultLotery); //dodajemy nasz div do 6 do tablicy z wyników siedzi w zmiennej result

}


//pobranie elementu na który pracujemy
const button = document.querySelector('button');
//nasluchiwwanie na zdarzenie w tym przypadku na kliknicie
button.addEventListener("click", lotery);
