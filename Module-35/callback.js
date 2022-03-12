function welcome(name, functionHandeler) {


    functionHandeler(name)

}

function goodMornung(name) {
    console.log('good morning', name);
}
function goodEvening(name) {
    console.log('good Evening', name);
}
function goodNight(name) {
    console.log('good Night', name);
}


welcome('tom hanks ', goodMornung);
welcome('cat hanks ', goodEvening);
welcome('tom cruis', goodNight);





/* function welcome(name, functionHandeler) {

    // console.log(functionHandeler);
    functionHandeler(name)

}

function goodMornung(name) {
    console.log('good morning', name);
}


welcome('tom hanks ', goodMornung); */


