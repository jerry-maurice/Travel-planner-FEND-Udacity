function handleSubmit(event, form) {
    /**
     * receive data inputed by user and sent to server
     */
    event.preventDefault()

    let formdata = new FormData(form);
    const data = {
        'location':formdata.get('location'),
        'departure':formdata.get('trip_date')
    }
    console.log("form submitted");
    fetch('http://localhost:8081/trip',{
        method:'POST',
        body:JSON.stringify(data),
        mode:'cors',
        headers:{
            'Accept':'application/json',
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
    .then(function(res){
        Client.removeChilds(Client.main_display_result);
        display_on_screen(res);
    })
    
}

function display_on_screen(res){
    //fragment
    const display_fragment = document.createDocumentFragment();
    //countdown
    let deadline = new Date(res.departure).getTime();
    let now = new Date().getTime();
    let time_difference = deadline - now;
    let days = Math.floor(time_difference/(1000 * 60 * 60 * 24));

    let countdown = document.createElement('h2');
    countdown.textContent = `${days} day(s) to go`;

    Client.main_display_result.style.display = "flex";
    Client.main_display_result.classList.add('result');

    let divImage = document.createElement('div');
    let divInfo = document.createElement('div');

    let location_name = document.createElement('h3');
    let depart_date = document.createElement('h3');
    let location_image = document.createElement('img');
    let flag_location = document.createElement('img');

    location_image.src = res.image;
    flag_location.src = res.flag;
    location_image.height = 150;
    flag_location.height = 25;
    location_name.textContent = `My trip to: ${res.location}`;
    depart_date.textContent = `Departing: ${formatDate(res.departure)}`;

    let weather = document.createElement('p');
    weather.textContent = `Weather: ${res.description}, Wind Speed: ${res.wind_speed}`;
    divInfo.appendChild(countdown);
    divInfo.appendChild(location_name);
    divInfo.appendChild(depart_date);
    divInfo.appendChild(flag_location);
    divInfo.appendChild(weather);
    divImage.appendChild(location_image);

    display_fragment.appendChild(divImage);
    display_fragment.appendChild(divInfo);

    Client.main_display_result.appendChild(display_fragment);
}

function handleReset(){
    Client.intialization();
    Client.removeChilds(Client.main_display_result);
}

function formatDate(data){
    /**
     * Display a more readable date
     */
    let new_date = new Date(data);
    let day = (new_date.getDate()).toString().padStart(2,"0");
    let month = (new_date.getMonth()+1).toString().padStart(2,"0");
    let year = new_date.getFullYear();
    let new_format_date = `${month}-${day}-${year}`;
    return String(new_format_date);
}

export { handleSubmit }
export { handleReset }
