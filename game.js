let input = document.querySelector("input");
let btn = document.querySelector("button");
let icon = document.querySelector(".alpha");
let chances = document.querySelector("h3")
let scores = 10;
let words = [
    "cat", "sun", "hat", "book", "dog", "milk", "ball", "star", "fish", "rain",
    "apple", "beach", "train", "plant", "chair", "sleep", "laugh", "brush", "cloud", "juice",
    "window", "rocket", "pencil", "monkey", "butter", "purple", "school", "summer", "singer", "friend",
    "balloon", "teacher", "picture", "blanket", "tractor", "monster", "glasses", "package", "diamond", "pyramid",
    "elephant", "chocolate", "kangaroo", "adventure", "restaurant", "hamburger", "telephone", "alligator", "backpack", "triangle",
    "spoon", "grape", "cookie", "robot", "house", "green", "store", "sugar", "jelly", "smile",
    "orange", "planet", "guitar", "turtle", "castle", "pillow", "kitten", "bottle", "winter", "forest",
    "castle", "mirror", "rocket", "whistle", "zebra", "camera", "button", "candle", "garage", "basket",
    "engine", "ladder", "parrot", "island", "breeze", "garden", "pirate", "shower", "jungle", "puzzle",
    "laptop", "wallet", "cactus", "ticket", "roller", "magnet", "thread", "pepper", "bubble", "fossil",
    "ant", "dog", "car", "box", "pen", "map", "sun", "egg", "toy", "bus",
  "milk", "book", "cake", "rain", "snow", "tree", "frog", "ball", "ring", "duck",
  "apple", "beach", "chair", "grape", "cloud", "light", "plant", "horse", "piano", "smile",
  "train", "house", "watch", "shirt", "brush", "drums", "green", "socks", "candy", "lemon",
  "school", "pencil", "guitar", "rocket", "circle", "winter", "window", "basket", "jungle", "kitten",
  "tunnel", "parrot", "mirror", "castle", "pirate", "butter", "camera", "planet", "bottle", "cookie",
  "monster", "blanket", "package", "teacher", "diamond", "picture", "glasses", "balloon", "tractor", "monster",
  "elephant", "backpack", "kangaroo", "telephone", "restaurant", "adventure", "alligator", "hamburger", "triangle", "chocolate",
  "snowflake", "playground", "helicopter", "skateboard", "microscope", "binoculars", "notebook", "storybook", "basketball", "toothbrush",
  "firefighter", "rainforest", "butterfly", "watermelon", "spaceship", "flashlight", "sunglasses", "shoelaces", "earthquake", "trampoline"
  ]
  
let correct;
let idx = Math.floor(Math.random() * words.length);
correct = words[idx].toUpperCase();
let guessed = Array(correct.length).fill("_");

function loads(word) {

    for(alpha of word) {
      const ico = document.createElement("h1");
      ico.innerHTML = '<i class="fa-solid fa-minus">';
      icon.append(ico);
    }
}
loads(correct)

btn.addEventListener("click",() => 
    {
    let found = 0;
        for(let i=0; i < correct.length;i++)
        {
            const matching = document.querySelectorAll(".alpha h1");
            if(input.value.toUpperCase() === correct[i])
            {
                matching[i].innerHTML = correct[i];
                found++;
                guessed[i] = correct[i];
            }
        }
        if(found === 0)
        {
             scores -=1;
             chances.innerText = `Chances = ${scores}`;
        }
        if(scores <= 0)
        {
            chances.innerText = `You lose! correct was ${correct}`;
            chances.style.color = "red";
            btn.disabled = true;
        }
        if(guessed.join("") === correct)
        {
            chances.innerText = `Congrats! You Win`;
            chances.style.color = "green";
            btn.disabled = true;
        }
        input.value = "";
    })
