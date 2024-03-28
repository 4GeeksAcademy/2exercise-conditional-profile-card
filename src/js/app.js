import { left, right } from "@popperjs/core";
import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 *
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastName}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.country} ${variables.city}</h3>
          <ul socialMediaPosition: ${variables.right} ${variables.right}>
            <li>${variables.twitter} <a href="https://twitter.com/4geeksacademy"><i class="fab fa-twitter"></i></a></li>
            <li>${variables.github} <a href="https://github.com/4GeeksAcademy/html-hello"><i class="fab fa-github"></i></a></li>
            <li>${variables.linkedin}<a href="https://www.linkedin.com/feed/"><i class="fab fa-linkedin"></i></a></li>
            <li>${variables.instagram}<a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://phantom-elmundo.unidadeditorial.es/8ab97c738311bd3413282627af072a39/crop/0x0/1417x945/resize/828/f/webp/assets/multimedia/imagenes/2023/04/08/16809405243604.jpg",
    // this is the url for the profile avatar
    avatarURL:
      "https://media.licdn.com/dms/image/D4D03AQHpwe-1NSkKmg/profile-displayphoto-shrink_800_800/0/1702558208542?e=2147483647&v=beta&t=qh_xKlmTwfh9qA1TakTtEhGC1eQrzXsgUjdEWG7XF64",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
