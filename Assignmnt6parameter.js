function funs() {
    return 'Hello';
}

function names(user, func)
{

    const message = func();

    console.log(`${message} ${user}`);
}

names('Sangeetha', funs);
names('Arjun', funs);
