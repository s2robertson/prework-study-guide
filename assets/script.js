let topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

function listTopics() {
    for (const topic of topics) {
        console.log(topic);
    }
}

function selectTopic(topic) {
    if (topic === 'HTML') {
        console.log("Let's study HTML");
    }
    else if (topic === 'CSS') {
        console.log("Let's study CSS");
    }
    else if (topic === 'Git') {
        console.log("Let's study Git");
    }
    else if (topic === 'JavaScript') {
        console.log("Let's study JavaScript");
    }
    else {
        console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('What should we study first?');
selectTopic(topics[Math.floor(Math.random() * topics.length)]);

document.querySelectorAll('.card').forEach(element => {
    element.addEventListener('click', () => selectTopic(element.dataset.topic));
})