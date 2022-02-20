function getBotResponse(input) {
    //rock paper scissors
    if (input == "Which animal is best for adoption") {
        return "Dogs are good as well, but only if you have the time";
    } else if (input == "Best Animals to Keep as Pets") {
        return "A dog is loyal ,A cat is independent ,depends on you what you like most";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }else if (input == "hi") {
        return "Hi there!😀";
    }else if (input == "bye") {
        return "Okay bye ! Take care!😃";
    }
     else {
        return "Try asking something else!";
    }
}