const navbar = document.getElementById("main-nav");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";}

    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;}, 200);} 

    else {navbar.classList.add("top");
    scrolled = false;}};


const home = document.getElementsById("home-c");
    let scrolled = false;

window.onscroll = function () {
  if (window.pageXOffset > 100) {
    home.classList.remove("move");

    if (!scrolled) {
      home.style.transform = "translateY(-70px)";} 
      
      setTimeout(funtion () {
        home.style.transform = "translateY(0)";
        scrolled = true;}, 200);}

      else {home.classList.add("move");
    scrolled = false;}};



const img = document.querySelector('.img');
img.classList.remove('img-transition');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      img.classList.add('img-transition');
    return;}

    img.classList.remove('img-transition');
  });
});

observer.observe(document.querySelector('.img-transition'));


let text_element = document.querySelector(".text");
let text_array = text_element.innerHTML.split("");
let text_array_slice = text_element.innerHTML.split(" ");
let text_len = text_array.length;

const word_len = text_array_slice.map((word) => {
    return word.length;
})

console.log(word_len);

let timings = {
    easing: `steps(${Number(word_len[0] + 1)}, end)`,
    delay: 2000,
    duration: 2000,
    fill: 'forwards'
}

let cursor_timings = {
    duration: 700,
    iterations: Infinity,
    easing: 'cubic-bezier(0,.26,.44,.93)'
}

document.querySelector(".text_cursor").animate([
    {
        opacity: 0
    },
    {
        opacity: 0, offset: 0.7
    },
    {
        opacity: 1
    }
], cursor_timings);

if(text_array_slice.length == 1){
    timings.easing = `steps(${Number(word_len[0])}, end)`;

    document.querySelector(".text_hide").animate([
        { left: '0%' },
        { left: `${(100 / text_len) * (word_len[0])}%` }
    ], timings);

    document.querySelector(".text_cursor").animate([
        { left: '0%' },
        { left: `${(100 / text_len) * (word_len[0])}%` }
    ], timings);
} else{
    document.querySelector(".text_hide").animate([
        { left: '0%' },
        { left: `${(100 / text_len) * (word_len[0] + 1)}%` }
    ], timings);

    document.querySelector(".text_cursor").animate([
        { left: '0%' },
        { left: `${(100 / text_len) * (word_len[0] + 1)}%` }
    ], timings);
}


for (let i = 1; i < text_array_slice.length; i++) {
    console.log(word_len);
    console.log(text_array_slice.length);
    const single_word_len = word_len[i];
    console.log(single_word_len);

    if (i == 1) {
        var left_instance = (100 / text_len) * (word_len[i - 1] + 1);
        console.log(left_instance);
    }

    let timings_2 = {
        easing: `steps(${Number(single_word_len + 1)}, end)`,
        delay: (2 * (i + 1) + (2 * i)) * (1000),
        // delay: ((i*2)-1)*1000,
        duration: 2000,
        fill: 'forwards'
    }

    if (i == (text_array_slice.length - 1)) {
        timings_2.easing = `steps(${Number(single_word_len)}, end)`;
        document.querySelector(".text_hide").animate([
            { left: `${left_instance}%` },
            { left: `${left_instance + ((100 / text_len) * (word_len[i]))}%` }
        ], timings_2);

        document.querySelector(".text_cursor").animate([
            { left: `${left_instance}%` },
            { left: `${left_instance + ((100 / text_len) * (word_len[i]))}%` }
        ], timings_2);
    } else {
        document.querySelector(".text_hide").animate([
            { left: `${left_instance}%` },
            { left: `${left_instance + ((100 / text_len) * (word_len[i] + 1))}%` }
        ], timings_2);

        document.querySelector(".text_cursor").animate([
            { left: `${left_instance}%` },
            { left: `${left_instance + ((100 / text_len) * (word_len[i] + 1))}%` }
        ], timings_2);
    }

    left_instance = left_instance + ((100 / text_len) * (word_len[i] + 1));
}