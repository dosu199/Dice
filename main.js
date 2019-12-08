
window.onload = () => {

        let angle = 0;
        function rotate() {

                angle += 45;
                dice.style.transform = "rotate(" + angle + "deg)";
        }
        function random() {

                number.innerHTML = Math.floor(Math.random() * 6 + 1);
        }

        function chagneColor() {

                let randRed = Math.floor(Math.random() * 256);
                let randGreen = Math.floor(Math.random() * 256);
                let randBlue = Math.floor(Math.random() * 256);
                dice.style.backgroundColor = 'rgb(' + randRed + ',' + randGreen + ',' + randBlue + ')';
        };
        function diceTransition(){

                dice.style.transition = "all 2s";
        }

        let number = document.getElementById("number");
        let dice = document.getElementById("dice");

        dice.addEventListener("click", (e) => {
                random();
                rotate();
                chagneColor();
                diceTransition()
        });


};
