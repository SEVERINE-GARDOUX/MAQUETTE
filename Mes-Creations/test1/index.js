const color = document.querySelector ('.color')
const couleur = document.querySelector ('.btn')

couleur.addEventListener ('click', function () {
    document.querySelector ('h2').textContent = ' Vous aimez la couleur ' + color.value 
    document.querySelector ('body').style.backgroundColor = color.value
    document.querySelector ('.btn').style.backgroundColor = color.value
    document.querySelector ('.contenu-img').style.backgroundColor = color.value
})

const image = document.querySelector ('#animaux')

image.addEventListener ('change', function (e) {
    document.querySelector ('.contenu-img').style.backgroundImage = `url(${image.value})`
}
)