
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

async function Iss(){
    const response = await fetch(api)
    const data = await response.json();
    const {velocity , altitude , latitude , longitude} = data;

    document.getElementById('velo').textContent = velocity;
    document.getElementById('alt').textContent = altitude;
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude
    console.log(data)
}
 const api = 'https://api.wheretheiss.at/v1/satellites/25544'



Iss()

const like = document.getElementById("likeBtn")
const dislike = document.getElementById('dislikeBtn')

  dislike.addEventListener('click', e => {
      alert('You cannot stop the speed of the ISS!!')
  })
  like.addEventListener('click', e => {
      alert('Not fast enough!!')
  })

});