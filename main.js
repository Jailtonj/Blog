let delay = -0.4;
function createCard(title, date, content) {
    delay = delay + 0.4;
    return `
      <div class="card" style="animation-delay: ${delay}s">
          <h2>${title} <article>${date}</article></h2>
          <p>
            ${content}
          </p>
        </div>
    `
  }

  document.querySelector("#cards").innerHTML = 
      createCard("Tim Berners-Lee vai leiloar código-fonte da web", "02 de jul, 2021", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero." )