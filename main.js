const topicCard = document.querySelectorAll('[data-topicCard]')
const btnStart = document.querySelector('[data-btnStart]');
const topicInpiut = document.querySelector('[data-topic-name]')
let index = 0;
let time = 7000;
let pics = [];

function startSlideshow()
{
    
    
        
    
}

function randomise(){
        selectTopictype()
        let imagePromise = getWord(topicType)
        .then((topicName) =>{
            console.log(topicName);
            return(getImages(topicName)) 
        })
        .then((images) =>{
            pics = images;
            slideShow();
            
        })
}

 function slideShow(){
    document.slide.src =  pics[index];
    if (index < pics.length - 1 ){
        index++;
    }
    else{
        index = 0;
    }
    setTimeout('slideShow()', time);
}

function getImages(nameofTopic)
{
    return fetch ('https://pixabay.com/api/?key=27492586-7ff850d71ad1fd6c7ff841f16&q='+nameofTopic+'&image_type=photo')
    .then((resp) => {
        return resp.json(); 
    })
    .then((data) =>{
        return data.hits.map(pics => {
            return pics.largeImageURL;
        })
    })
}
function getWord(type)
{
    console.log(type);
    return fetch('https://random-word-form.herokuapp.com/random/'+ type) 
    .then((response) => {
        return response.json();
    })
    .then((data) =>{
        return data[0];
    })
    
}

function selectTopictype()
{
    let random = Math.floor(Math.random() * 3) + 1;
    console.log(random);

    switch (random) {
        case 1:
            topicType = 'animal'
            break;
        case 2:
            topicType = 'adjective'
            break;
        case 3:
            topicType = 'noun'
            break;
    }
}

function assignbuttonTopic(){

}

