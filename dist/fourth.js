"use strict";
//********************************* */
// async function
// callback function
function callback(msg) {
    console.log('callback function:', msg);
}
let ok = true;
const promise = new Promise((resolve, reject) => {
    if (ok) {
        resolve('Great this is working');
    }
    else {
        reject('Something went wrong');
    }
});
promise
    .then(callback)
    .catch((err) => {
    console.log("il s'est passé un truc pas net: ", err);
})
    .finally(() => {
    console.log('fin de la promesse');
});
//********************************* */
// async await
// function syncFunc(): string {
//   if (ok) {
//     return 'Génial ça fonctionne!';
//     throw new Error('oops, un deuxième problème est survenu');
//   }
// }
// const functionAsync = async () => {
//   const msg = await syncFunc();
//   return msg;
// };
// functionAsync()
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("il s'est passé un truc pas net: ", err);
//   })
//   .finally(() => {
//     console.log('fin de la promesse');
//   });
function syncFunc() {
    if (ok)
        return 'génial ça fonctionne en 2eme!';
    throw new Error('oupss, un 2eme probleme est arrivé!');
}
const fonctionAsync = async () => {
    ok = false;
    const msg = await syncFunc();
    return msg;
};
fonctionAsync()
    .then((msg) => {
    console.log(msg);
})
    .catch((err) => {
    console.log("il s'est passé un 2eme truc pas net : ", err.message);
})
    .finally(() => {
    console.log('fin de la 2eme promesse');
});
console.log('début du programme');
