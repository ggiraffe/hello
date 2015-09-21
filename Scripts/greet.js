var greet = (function() {
    // http://www.fluentu.com/english/blog/english-greetings-expressions/
 
    var greetings = [];
 
    greetings.push({ times:1, greetings:[
                        "How are you?",
                        "Good morning!",
                        "Good afternoon!",
                        "Good evening!",
                        "It's nice to meet you!",
                        "Pleased to meet you!"
                    ] });
 
    greetings.push({ times:2, greetings:[
                        "It's nice to see you again!",
                        "How have you been?",
                        "How do you do?",
                    ] });
 
    greetings.push({ times:3, greetings:[
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
                    ] });
 
    greetings.push({ times:10, greetings:[
                        "Yo!",
                        "Are you OK?",
                        "You alright?",
                        "Sup?",
                        "Whazzup?",
                        "G'day mate!",
                        "Hiya!"
                    ] });
 
 
    // load meets from cookies
    function loadMeets() {
        if (!Cookies.get("meets"))
            Cookies.set("meets", [], { expires:100, path:"" });
 
        return JSON.parse(Cookies.get("meets"));
    }
 
    // save meets to cookies
    function saveMeets(meets) {
        Cookies.set("meets", meets, { expires:100, path:"" });
    }
 
    // meet a guest, increases times by 1
    function meet(guest) {
        var meets = loadMeets();
        var times = 1;
 
        if (!findMeet(guest, meets))
            meets.push({ "guest":guest, "times":1 });
        else
            times = ++findMeet(guest, meets).times;
 
        saveMeets(meets);
 
        return times;
    }
 
    // find the meet object of the guest
    function findMeet(guest, meets) {
        if (!meets)
            meets = loadMeets();
        var m;
 
        $.each(meets, function() {
            if (this.guest == guest)
                m = this;
        });
 
        return m;
    }
 
    // find the greetings according to the meet times
    function findGreetings(times) {
        var g;
 
        $.each(greetings, function() {
            if (times >= this.times)
                g = this.greetings;
        });
 
        return g;
    }
 
    return function(guest) {
        var g = findGreetings(meet(guest));
        var count = g.length;
        var idx = Math.floor(Math.random() * count);
        sayHello(g[idx], guest);
    };
}());
 
 
// remove meets from cookies
function reset() {
    Cookies.remove('meets', { path: "" });
}

