const tinggi = document.getElementById('tinggi-input')
const alas = document.getElementById('alas-input')
const hitung = document.getElementById('hitung')
const reset = document.getElementById('reset')
const keliling = document.getElementById('keliling')
const output = document.getElementById('luas')
hitung.addEventListener('click', function (){
    output.innerText = (alas.value * tinggi.value)/2
})
reset.addEventListener('click', function (){
    tinggi.value = null
    alas.value = null
    output.value = ''
})
keliling.addEventListener('click', function (){
    console.log = (keliling)
})
