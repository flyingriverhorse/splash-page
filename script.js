const body = document.body; // = const {body} = document;

// let count = 0;

// const ourMemory = {
//  [count]: Array(10000).fill('*'),
// }; //object



function changeBackground(number){
    // count++;
    // ourMemory[count] = Array(10000).fill('*');
    //check if bacgroudn alreaddy showing
    let previousBackground;
    if (body.className) {
        previousBackground = body.className;
    }
    body.className = ''; // will reset body everytime when we choose
    // switch (number) {
    //     case '1':
    //         body.classList.add('background-1');
    //         break;
    //     case '2':
    //         body.classList.add('background-2');
    //         break;
    //     case '3':
    //         body.classList.add('background-3');
    //         break;
    //     default:
    //         break;
    // }
    switch (number) {
        case '1':
            return (previousBackground === 'background-1' ? false : body.classList.add('background-1')); // if pre. background is 1 do nothing otherwise change
        case '2':
            return (previousBackground === 'background-2' ? false :body.classList.add('background-2'));
        case '3':
            return (previousBackground === 'background-3' ? false : body.classList.add('background-3'));
        default:
            break;
    }
}

