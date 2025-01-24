let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) => {
    let speakInput = new SpeechSynthesisUtterance(input);
    speakInput.lang = 'en-IN'
    speakInput.rate = 1;
    speakInput.pitch = 1;
    speakInput.volume = 1;

    window.speechSynthesis.speak(speakInput)
}
window.onload = () => {
    greetingFunc();
    speakFunc("I'm your personal AI assistant. Thankyou for giving me this virtual life. It’s great to hear from you. What can I assist you with today? Whether it's answering questions, or just having a chat, I’m here to make things easier for you. Let’s make today productive, enjoyable, and stress-free—starting now!");
}

const greetingFunc = () => {
    let today = new Date();
    let hour = today.getHours();
    // console.log(hour)
    // let greeting;
    if (hour >= 0 && hour < 12) {
        speakFunc("Good Morning Navneet sir");
    } else if (hour >= 12 && hour < 16) {
        speakFunc("Good Afternoon Navneet sir");
    } else {
        speakFunc("Good Evening Navneet Sir");
    }
}


const startVoiceInput = () => {
    if ('webkitSpeechRecognition' in window)
    {
        let recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.onresult = (e) => {
            let spokenText = e.results[0][0].transcript;
            handleCommands(spokenText);  
            box.classList.remove("btn-box")
            btn.innerHTML = `<i class="fa-solid fa-microphone-lines-slash"></i>`      
        }   
        recognition.start();
    }else {
        alert("Your browser does not support Speech Recognition.");
    }
}

btn.onclick = () => {
    box.classList.add("btn-box")
    btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`
    startVoiceInput();
}

const handleCommands = (command) => {
    command = command.toLowerCase().trim(); // Normalize input
    console.log("Processed Command:", command);

    if (command.includes("hello") || command.includes("hey") || command.includes("hi")) {
        speakFunc("Hello Sir, How can I help you!");
    } else if (command.includes("who are you") || command.includes("developed") || command.includes("who")) 
    {
        speakFunc("I am a virtual assistant, developed by Navneet Ranjan.");
    } else if (command.includes("google") || command.includes("browser") || command.includes("open google")) 
    {
        speakFunc("Opening... google.com.");
        window.open("http://www.google.com");
    }else if (command.includes("open youtube") || command.includes("youtube")) 
    {
        speakFunc("Opening... youtube.com.");
        window.open("http://www.youtube.com");
    }else if (command.includes("open linkedin") || command.includes("linkedin")) 
    {
        speakFunc("Opening... linkedin.com");
        window.open("http://www.linkedin.com");
    }else if (command.includes("open facebook") || command.includes("facebook")) 
    {
        speakFunc("Opening... facebook.com.");
        window.open("http://www.facebook.com");
    }else if (command.includes("open chat gpt") || command.includes("gpt")) 
    {
        speakFunc("Opening... chat G P T");
        window.open("http://openai.com/chatgpt/");
    }
    else if(command.includes("what's the weather") || command.includes("weather") || command.includes("temperature")){
        speakFunc("Opening... Weather.com");
        window.open("https://weather.com/en-IN/weather/today/l/7012ed8d6cfbd5fca9659ed31d11f22326ce2cd54e844bd8e6c5795fd7efe54a")
    }
    else if(command.includes("open calculator") || command.includes("calculator")){
        speakFunc("Opening... Calculator");
        window.open("calculator://")
    }
    else if(command.includes("time") || command.includes("current time")){
        let time = new Date().toLocaleDateString(undefined, {hour: 'numeric', minute: 'numeric', second: 'numeric'})
        speakFunc(time);
    }
    else if(command.includes("date") || command.includes("current date")){
        let date = new Date().toLocaleDateString(undefined, {date: 'numeric', month: 'long'})
        speakFunc(date);
    }
    else if(command.includes("open camera") || command.includes("camera")){
        speakFunc("Opening... Camera");
        window.open("camera://")
    }
    else {
        speakFunc(`This is, what I found on internet regarding ${command}`);
        window.open(`https://www.google.com/search?q=${command}`);
    }
}