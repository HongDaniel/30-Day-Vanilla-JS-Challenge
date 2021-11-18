let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2) {
        resolve('sucess');
    } else {
        reject('fail');
    }
});

p.then((msg) => {
    console.log(`This is from then : ${msg}`);
}).catch((msg) => {
    console.log(`This is from catch : ${msg}`);
});
