//create object way 01 - object literal
// let dev = [
//     {
//         nama: 'bei',
//         energi: 10,
//         makan: function(porsi) {
//             this.energi = this.energi + porsi;
//             console.log(`Halo ${this.nama}, selamat makan!`);
//         }
//     }
// ]


//create object way 02 - function declaration
const methodDev = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    },
    main: function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Bermain!`)
    },
    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, Selamat Tidur!`)
    }
}

function Develop(nama, energi) {
    let dev01 = Object.create(methodDev);
    dev01.nama = nama;
    dev01.energi = energi;

    return dev01;
}

let bei = Develop('bei', 10);


//create object way 03 - constructor function
// function Developer(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Congratulation ${this.nama}, energi up!`);
//     },
//     dev.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, have fun!`)
//     }
// }

// let nnsab = new Developer('nS01', 10);