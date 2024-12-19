    // Skills data
    const skills = [
        { "name": "C++", "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
        { "name": "Java", "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" },
        { "name": "Python", "icon": "https://img.icons8.com/color/48/000000/python--v1.png" },
        { "name": "HTML", "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png" },
        { "name": "CSS3", "icon": "https://img.icons8.com/color/48/000000/css3.png" },
        { "name": "JavaScript", "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png" },
        { "name": "Flask", "icon": "https://img.icons8.com/ios/48/000000/flask.png" },
        { "name": "GitHub", "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png" },
        { "name": "MongoDB", "icon": "https://img.icons8.com/color/48/000000/mongodb.png" },
        { "name": "MySQL", "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png" }
    ];

    // Select the skills container
    const skillsContainer = document.getElementById('skillsContainer');

    // Iterate through skills and create HTML elements
    skills.forEach(skill => {
        const skillBox = document.createElement('div');
        skillBox.classList.add('col');  // Add a 'col' class for layout
        skillBox.innerHTML = `
            <div class="skill-box">
                <img src="${skill.icon}" alt="${skill.name}" class="skill-icon">
                <h3>${skill.name}</h3>
            </div>
        `;
        // Append the skill box to the container
        skillsContainer.appendChild(skillBox);
    });

    // "Read More" functionality
    const readMoreBtn = document.getElementById('read-more-btn');
    const moreInfo = document.getElementById('more-info');

    // Add an event listener to the button
    readMoreBtn.addEventListener('click', () => {
        // Toggle the visibility of the additional info
        if (moreInfo.style.display === 'none') {
            moreInfo.style.display = 'block';
            readMoreBtn.textContent = 'Read Less';  // Change button text
        } else {
            moreInfo.style.display = 'none';
            readMoreBtn.textContent = 'Read More';  // Revert button text
        }
    });

// var sliderCounter = 0;
// var sliderContent = [
//     "Coder",
//     "Developer",
// ];

// var sliderValue = document.querySelector("#sliderValue");

// function slide() {
//     if (sliderCounter >= sliderContent.length) {
//         sliderCounter = 0;
//     }
//     sliderValue.innerHTML = "";
//     sliderValue.classList.remove("holder-animation");
//     void sliderValue.offsetWidth;
//     sliderValue.classList.add("holder-animation");
    
//     for (let i = 0; i < sliderContent[sliderCounter].length; i++) {
//       let letterDiv = document.createElement("div");
//       letterDiv.innerHTML = sliderContent[sliderCounter][i];
    
//       if (letterDiv.innerHTML == "") {
//         letterDiv.innerHTML = "&nbsp;";
//       }
    
//       letterDiv.classList.add("start");
//       letterDiv.classList.add("animation");
//       letterDiv.style.animationDelay = i / 10 + "s";
    
//       sliderValue.appendChild(letterDiv);
//     }
//     sliderCounter++;
// }
// slide();
// setInterval(slide,2000);

var sliderCounter = 0;
var sliderContent = [
    "Coder", // Add more words as needed
    "Developer",
];

var sliderValue = document.querySelector("#sliderValue");

function slide() {
    if (sliderCounter >= sliderContent.length) {
        sliderCounter = 0;
    }

    // Clear previous content
    sliderValue.innerHTML = "";
    sliderValue.classList.remove("holder-animation");
    
    // Trigger reflow for animation restart
    void sliderValue.offsetWidth;
    sliderValue.classList.add("holder-animation");

    // Create each character in sequence
    let currentWord = sliderContent[sliderCounter];
    for (let i = 0; i < currentWord.length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = currentWord[i];

        // Handle empty spaces
        if (letterDiv.innerHTML == "") {
            letterDiv.innerHTML = "&nbsp;";
        }

        letterDiv.classList.add("start");
        letterDiv.classList.add("animation");
        
        // Apply delay for each character
        letterDiv.style.animationDelay = (i * 0.3) + "s"; // Delay of 0.3s per character

        // Append character to the container
        sliderValue.appendChild(letterDiv);
    }

    // Move to the next word/content
    sliderCounter++;
}

// Initial slide
slide();

// Set interval to change text every 3 seconds (adjust timing as needed)
setInterval(slide, 3000); // Adjust interval for word change


/* Toggle Menu */
$(document).ready(function() {
    // Toggle Menu on button click
    $(".menu-btn").click(function() {
      $(".menu").toggleClass("active");  // Toggle the 'active' class on the menu
      $(".menu-btn i").toggleClass("active");  // Toggle 'active' class on the icon
    });
  });
  
  
  /* Scroll Animation */
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
  });
  
  sr.reveal(".featured-text", {});
  sr.reveal(".home-img", { delay: 200 });
sr.reveal(".heading",{});
// Example smooth scroll behavior
$('a[href^="#"]').on('click', function (event) {
    event.preventDefault(); // Prevent default action
    const target = $(this.getAttribute('href'));
    if (target.length) {
        $('html, body').animate(
            {
                scrollTop: target.offset().top,
            },
            500 // Adjust scroll speed
        );
    }
});




