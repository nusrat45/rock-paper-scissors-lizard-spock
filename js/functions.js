function generateRandomNumers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removePickedClass(targetClass) {
    let arr = ['rplsls-lets-play__two-sides__picked-img-scissors', 'rplsls-lets-play__two-sides__picked-img-rock', 'rplsls-lets-play__two-sides__picked-img-paper', 'rplsls-lets-play__two-sides__picked-img-spock', 'rplsls-lets-play__two-sides__picked-img-lizard'];
    for(const el of arr) {
        if(targetClass.classList.contains(el)){
            targetClass.classList.remove(el);
        }
    }
    targetClass.childNodes[1].removeAttribute('src');
}

function setValueForComputerSide() {
    let pickNumForComuputerSide = generateRandomNumers(1, 5);
    //console.log(pickNumForComuputerSide);
    let imgSrcComp = '';
    let imgParentClass = '';
    switch(pickNumForComuputerSide) {
        case 1:
            imgSrcComp = 'images/logos/icon-scissors.svg';
            imgParentClass = 'rplsls-lets-play__two-sides__picked-img-scissors';
            break;
        case 2:
            imgSrcComp = 'images/logos/icon-spock.svg';
            imgParentClass = 'rplsls-lets-play__two-sides__picked-img-spock';
            break;
        case 3:
            imgSrcComp = 'images/logos/icon-paper.svg';
            imgParentClass = 'rplsls-lets-play__two-sides__picked-img-paper';
            break;
        case 4:
            imgSrcComp = 'images/logos/icon-lizard.svg';
            imgParentClass = 'rplsls-lets-play__two-sides__picked-img-lizard';
            break;
        case 5:
            imgSrcComp = 'images/logos/icon-rock.svg';
            imgParentClass = 'rplsls-lets-play__two-sides__picked-img-rock';
            break;    
        default:
            //fallback
            imgSrcComp = 'images/logos/icon-rock.svg';
            imgParentClass = 'rplsls-lets-play__two-sides__picked-img-rock';
            break;            
    }

    
    let targetClass = document.querySelector('.rplsls-lets-play__computers-side__img');
    removePickedClass(targetClass);
    targetClass.classList.add(imgParentClass);
    targetClass.classList.remove('rplsls-lets-play__computers-side__loading');
    let parentNode = document.querySelector('.rplsls-lets-play__computers-side');
    //console.log(parentNode.childNodes);
    let computerSide = document.querySelector('.rplsls-lets-play__computers-side__img img');
    computerSide.setAttribute('src', imgSrcComp);
}

function setValueForPlayersSide(imgSrc) {
    let imgParentClass = '';
    if(imgSrc.indexOf('icon-scissors') > 0) {
        imgParentClass = 'rplsls-lets-play__two-sides__picked-img-scissors';
    } else if(imgSrc.indexOf('icon-spock') > 0) {
        imgParentClass = 'rplsls-lets-play__two-sides__picked-img-spock';

    } else if(imgSrc.indexOf('icon-paper') > 0) {
        imgParentClass = 'rplsls-lets-play__two-sides__picked-img-paper';

    } else if(imgSrc.indexOf('icon-lizard') > 0) {
        imgParentClass = 'rplsls-lets-play__two-sides__picked-img-lizard';

    } else {
        imgParentClass = 'rplsls-lets-play__two-sides__picked-img-rock';
    }

    let targetClass = document.querySelector('.rplsls-lets-play__players-side__img');
    removePickedClass(targetClass);
    targetClass.classList.add(imgParentClass);
    let playersSide = document.querySelector('.'+imgParentClass);
    playersSide.childNodes[1].setAttribute('src', imgSrc);
    document.querySelector('.rpsls-main-game-section').style.display = 'block';
}

function getNumberFromImg(imgSrc) {
    let num;
    //console.log('from function src: '+imgSrc);
    if(imgSrc.indexOf('icon-scissors') > 0) {
        num = 1;
    } else if(imgSrc.indexOf('icon-spock') > 0) {
        num = 2;
    } else if(imgSrc.indexOf('icon-paper') > 0) {
        num = 3;
    } else if(imgSrc.indexOf('icon-lizard') > 0) {
        num = 4;
    } else {
        num = 5;
    }
    return num;
}

function comparisonBetweenTwo(numPlayer, numComp) {
    
    if(numPlayer == 1 && numComp == 1) {
        return 0;
    } else if (numPlayer == 1 && numComp == 2) {
        return -1;
    } else if(numPlayer == 1 && numComp == 3) {
        return 1;
    } else if(numPlayer == 1 && numComp == 4) {
        return 1;
    } else if(numPlayer == 1 && numComp == 5) {
        return -1;
    } else if(numPlayer == 2 && numComp == 1) {
        return 1;
    } else if(numPlayer == 2 && numComp == 2) {
        return 0;
    } else if(numPlayer == 2 && numComp == 3) {
        return -1;
    } else if(numPlayer == 2 && numComp == 4) {
        return -1;
    } else if(numPlayer == 2 && numComp == 5) {
        return 1;
    } else if(numPlayer == 3 && numComp == 1) {
        return -1;
    } else if(numPlayer == 3 && numComp == 2) {
        return 1;
    } else if(numPlayer == 3 && numComp == 3) {
        return 0;
    } else if(numPlayer == 3 && numComp == 4) {
        return -1;
    } else if(numPlayer == 3 && numComp == 5) {
        return 1;
    } else if(numPlayer == 4 && numComp == 1) {
        return -1;
    } else if(numPlayer == 4 && numComp == 2) {
        return 1;
    } else if(numPlayer == 4 && numComp == 3) {
        return 1;
    } else if(numPlayer == 4 && numComp == 4) {
        return 0;
    } else if(numPlayer == 4 && numComp == 5) {
        return -1;
    } else if(numPlayer == 5 && numComp == 1) {
        return 1;
    } else if(numPlayer == 5 && numComp == 2) {
        return -1;
    } else if(numPlayer == 5 && numComp == 3) {
        return -1;
    } else if(numPlayer == 5 && numComp == 4) {
        return 1;
    } else if(numPlayer == 5 && numComp == 5) {
        return 0;
    }
}

function showFinalResult() {
    const $imgSrcPlayer = document.querySelector('.rplsls-lets-play__players-side__img');
    const imrSrcPlayer = $imgSrcPlayer.childNodes[1].getAttribute('src');
    const $imgSrcComp = document.querySelector('.rplsls-lets-play__computers-side__img');
    const imgSrcComp2 = $imgSrcComp.childNodes[1].getAttribute('src');
    //console.log('before function ',imgSrcComp2);
    const imgNumPlayer = getNumberFromImg(imrSrcPlayer);
    const imgNumComp = getNumberFromImg(imgSrcComp2);
    const finalResult = comparisonBetweenTwo(imgNumPlayer, imgNumComp);
    let $finalResult = '';
    let $finalResultText = '';
    if(window.innerWidth > 591) {
        $finalResult = document.querySelector('.rpsls-gameover-large-section');
        $finalResultText =  document.querySelector('.rpsls-gameover__text');

    } else {
        $finalResult = document.querySelector('.rpsls-gameover-small-section');
        $finalResultText =  document.querySelector('.rpsls-gameover-small__text');
    }

    //score
    const $score = document.querySelector('.rpsls-score-board__score__value');
    let scoreVal = parseInt($score.innerText);

    switch(finalResult) {
        case 0:
            $finalResultText.innerText = 'MATCH DRAWN';
            $finalResult.style.display = 'block';
            break;
        case 1:
            $finalResultText.innerText = 'YOU WIN';
            $finalResult.style.display = 'block';
            scoreVal++;
            $score.innerText =  scoreVal;
            break;
        case -1: 
            $finalResultText.innerText = 'YOU LOSE';
            $finalResult.style.display = 'block';
            scoreVal--;
            if(scoreVal < 0) {
                $score.innerText =  0;
            } else {
                $score.innerText =  scoreVal;
            }
            
            break;  
        default:
            break;        
    }

}

function executeWithDelay() {
    setTimeout( function() {  
        setValueForComputerSide();
        showFinalResult();
       
    }, 1000);
}

