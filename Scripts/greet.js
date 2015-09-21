var greet = (function() {
    // http://www.fluentu.com/english/blog/english-greetings-expressions/
 
    var greetings = [
        "Hi!",
        "Hello!",
        "Hey man!",
        "How is it going?",
        "How are you doing?",
        "What's up?",
        "What's new?",
        "How's everything?",
        "How are things?",
        "How's life?",
        "How's your day?",
        "Good to see you!",
        "Nice to see you!",
        "Long time no see!",
        "It's been a while!",
 
        "Good morning!",
        "Good afternoon!",
        "Good evening!",
        "It's nice to meet you!",
        "Pleased to meet you!",
        "It's nice to see you again!",
        "How have you been?",
        "How do you do?",
 
        "Yo!",
        "Are you OK?",
        "You alright?",
        "Sup?",
        "Whazzup?",
        "G'day mate!",
        "Hiya!"
    ];
 
    return function() {
        var count = greetings.length;
        var idx = Math.floor(Math.random() * count);
        alert(greetings[idx]);
    };
}());

