const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = 'A7xJs54NTW1Rew2KueD5840nQKxvTiAevL1nSjLy'


let navbar = document.querySelector('.navbar')
let navlink = document.createElement('a')
let navlinkimage = document.createElement('img')
navlink.setAttribute('class','navbar-brand')


navlinkimage.src = "./assets/nasa.jpg"
navlink.appendChild(navlinkimage)

navbar.appendChild(navlink)


const fetchNASAData = async () => {
  try {
    const response = await fetch(`${url}${api_key}`)
    const data = await response.json()
    console.log('NASA APOD data', data)
    displayData(data)
  } catch (error) {
    console.log(error)
  }
}

const displayData = data => {
  document.getElementById('title').textContent = data.title
  document.getElementById('date').textContent = data.date
  document.getElementById('picture').src = data.hdurl
  document.getElementById('explanation').textContent = data.explanation
}

fetchNASAData()

$(document).mousemove(function (e) {
  $(".pointer").css({ left: e.pageX, top: e.pageY });
});

