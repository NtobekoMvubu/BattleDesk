

const btnStart = document.querySelector('[data-btnStart]');
const topicInpiut = document.querySelector('[data-topic-name]')
let index = 0;
let images = [];
let time = 7000;
let results = [];
let topicName = topicInpiut.value;


 btnStart.addEventListener('click', (e) =>{
     getWord();
    console.log(topicInpiut.value);
    getImages(topicInpiut.value);
    slideShow();
    
})

function slideShow(){
    document.slide.src = images[index];
    if (index < images.length - 1 ){
        index++;
    }
    else{
        index = 0;
    }

    setTimeout('slideShow()', time);
}

function getImages(nameofTopic)
{
    console.log(nameofTopic)
    fetch ('https://pixabay.com/api/?key=27492586-7ff850d71ad1fd6c7ff841f16&q='+nameofTopic+'&image_type=photo')
    .then((resp) => {
        return resp.json();
        
    })
    .then((data) =>{
        console.log(data);
        results =data.hits;
        results.forEach(pics => {
            images.push(pics.largeImageURL)
        });
        
    })
}
function getWord()
{
    fetch('https://random-word-form.herokuapp.com/random/adjective')
    .then((response) => {
        return response.json();
    })
    .then((data) =>{
        topicName = data[0];   
        console.log(topicName);
    })
}

function getPicture()
{
    // fetch ('https://api.pexels.com/v1/search?query=nature&per_page=1',{
    // "Authorization" : '563492ad6f917000010000013e03d14ff6a14fb4b89641054d20fb18'} )
    // .then ((response) =>{
    //     return response.json();
    // })
    // .then((data)=>{
    //     console.log(data);
    // })
    
}