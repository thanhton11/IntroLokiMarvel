const fonts = [
    'Kirang Haerang',
    'Indie Flower',
    'Rye',
    'Amatic SC',
    'Bangers',
    'Fredericka the Great'
]
const  letters = document.querySelectorAll('.letter');
const changeFont = () =>{
    letters.forEach((letter)=>{
        let randomNumber =  Math.floor(Math.random() * fonts.length);
        let randomFont = fonts[randomNumber];
        letter.style.fontFamily = randomFont;
    });
}
let introAnimation = setInterval(function() {
    changeFont();
}, 350);