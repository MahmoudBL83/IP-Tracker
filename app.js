//Global Variables
let search = document.querySelector('#heading').querySelector('span');
let apiKey='at_1Dj6RKnsLSgcb7Seuu3xZ05NjKcdS';


/////////////////////////////////////////////////////

//Getting data from geo.ipify
search.addEventListener('click',async()=>{
    if(document.querySelector('#heading').querySelector('input').value==''){
        alert('Please enter a valid value');
    }
    else{
    let res=await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${document.querySelector('#heading').querySelector('input').value}&domain=${document.querySelector('#heading').querySelector('input').value}`);
    try {
        let res2=await res.json();
        document.querySelector('#ip').innerHTML=res2.ip;
        document.querySelector('#location').innerHTML=`${res2.location.country},<br>${res2.location.region},<br>${res2.location.city},${res2.location.postalCode}`;
        document.querySelector('#time').innerHTML=res2.location.timezone;
        document.querySelector('#isp').innerHTML=res2.isp;
        let y = res2.location.lat;
        let x = res2.location.lng;
        let map = L.map('map').setView([y, x], 70);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=vj3ILbN0u7EH9wTfWqJu', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);
document.querySelector('img').style='display:none;'
L.marker([y, x]).addTo(map);
    } catch (error) {
        location.reload();
    }
}})



////////////////////////////////////////////////////