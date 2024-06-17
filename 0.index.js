// .js por defecto utiliza CommonJS
// .mjs para utilizar ES Modules
// cjs para utilizar CommonJS

function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');
    
    setTimeout(f1, 100);
    console.log('end')
    f2();
}

main();