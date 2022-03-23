const color = document.querySelector ('.color')
const couleur = document.querySelector ('#btn')

couleur.addEventListener ('click', function () {
    document.querySelector ('h2').textContent = ' Vous aimez la couleur ' + color.value 
    document.querySelector ('body').style.backgroundColor = color.value
    document.querySelector ('#btn').style.backgroundColor = color.value
    document.querySelector ('.contenu-img').style.backgroundColor = color.value
})

const image = document.querySelector ('#animaux')

image.addEventListener ('change', function (e) {
    document.querySelector ('.contenu-img').style.backgroundImage = `url(${image.value})`
}
)


const bravo = document.querySelector ('.br')
const bisous = document.querySelector ('.bis')
const boo = document.querySelector ('.boo')
const rire = document.querySelector ('.rire')
const train = document.querySelector ('.train')
const sonnette = document.querySelector ('.sonnette')
const audio = document.querySelector ('audio')
bravo.addEventListener ('click', function (e) {
    console.log (e.target)
    audio.src = e.target.dataset.audio
    console.log (e.target.dataset.audio)
    audio.play ()
})

bisous.addEventListener ('click', function (e) {
    console.log (e.target)
    audio.src = e.target.dataset.audio
    console.log (e.target.dataset.audio)
    audio.play ()
})

boo.addEventListener ('click', function (e) {
    console.log (e.target)
    audio.src = e.target.dataset.audio
    console.log (e.target.dataset.audio)
    audio.play ()
})

rire.addEventListener ('click', function (e) {
    console.log (e.target)
    audio.src = e.target.dataset.audio
    console.log (e.target.dataset.audio)
    audio.play ()
})

train.addEventListener ('click', function (e) {
    console.log (e.target)
    audio.src = e.target.dataset.audio
    console.log (e.target.dataset.audio)
    audio.play ()
})

sonnette.addEventListener ('click', function (e) {
    console.log (e.target)
    audio.src = e.target.dataset.audio
    console.log (e.target.dataset.audio)
    audio.play ()
})