const $iconClickBtns = document.querySelectorAll('.rpsls-pick-options__icon');
const $rulesBtn = document.querySelector('.rpsls-game-rules__btn-rules');
const $rulesBtnSmall = document.querySelector('.rpsls-game-rules__btn-rules-small');
const $closePopupBtn = document.querySelector('.rpsls-game-rules-popup__rules-modal__top__closebtn');
const $closePopupBtnSmall = document.querySelector('.rpsls-game-rules-popup-small__rules-modal__closebtn');
const $gameRulesPopup =  document.querySelector('.rpsls-game-rules-popup');
const $gameRulesPopupSmall = document.querySelector('.rpsls-game-rules-popup-small');
const $playAgainBtn = document.querySelector('.rpsls-gameover__playagain-btn');
const $gameResult = document.querySelector('.rpsls-gameover-large-section');
const $gameResultsmall = document.querySelector('.rpsls-gameover-small-section');

for(const $iconClickBtn of $iconClickBtns) {
    $iconClickBtn.addEventListener('click', function(event){
        event.stopImmediatePropagation();
        let $this = event.currentTarget;
        let parentNode = document.querySelector('.rpsls-pick-options-section');
        parentNode.style.display = 'none'
        let imgSrc = $this.childNodes[1].getAttribute('src'); 
        setValueForPlayersSide(imgSrc);
        executeWithDelay();
    });
}

$rulesBtn.addEventListener('click', function(){
    document.querySelector('.rpsls-game-rules-popup-small').style.display = 'none';
    document.querySelector('.rpsls-game-rules-popup').style.display = 'block';
});

$rulesBtnSmall.addEventListener('click', function(){
    document.querySelector('.rpsls-game-rules-popup').style.display = 'none';
    document.querySelector('.rpsls-game-rules-popup-small').style.display = 'block';
});

$closePopupBtn.addEventListener('click', function(){
    document.querySelector('.rpsls-game-rules-popup').style.display = 'none';
    document.querySelector('.rpsls-game-rules-popup-small').style.display = 'none';
});

$closePopupBtnSmall.addEventListener('click', function(){
    document.querySelector('.rpsls-game-rules-popup').style.display = 'none';
    document.querySelector('.rpsls-game-rules-popup-small').style.display = 'none';
});

$playAgainBtn.addEventListener('click', function(){
    let targetClass_1 = document.querySelector('.rplsls-lets-play__players-side__img');
    removePickedClass(targetClass_1);
    let targetClass = document.querySelector('.rplsls-lets-play__computers-side__img');
    removePickedClass(targetClass);
    targetClass.classList.add('rplsls-lets-play__computers-side__loading');
    $gameResult.style.display = 'none';
    $gameResultsmall.style.display = 'none';
    document.querySelector('.rpsls-main-game-section').style.display = 'none';   
    document.querySelector('.rpsls-pick-options-section').style.display = 'block'; 
});

window.addEventListener('resize', function(event) {
    console.log('moving');
    var newWidth = window.innerWidth;
    if($gameRulesPopup.style.display == 'block' || $gameRulesPopupSmall.style.display == 'block') {
        if(newWidth <= 591) {
            $gameRulesPopup.style.display = 'none';
            $gameRulesPopupSmall.style.display = 'block';
        } else {
            $gameRulesPopup.style.display = 'block';
            $gameRulesPopupSmall.style.display = 'none';
        }
    } 

    console.log($gameResult.style.display);

    if($gameResult.style.display == 'block' || $gameResultsmall.style.display == 'block') {
        console.log('ok?');
        if(newWidth <= 591) {
            $gameResult.style.display = 'none';
            $gameResultsmall.style.display = 'block';
        } else {
            $gameResult.style.display = 'block';
            $gameResultsmall.style.display = 'none';
        }
    } 
}, true);





