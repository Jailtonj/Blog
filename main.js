let delay = -0.4;
function createCard(title, date, content) {
    delay = delay + 0.4;
    return `
    <section>
        <div id="app" style="animation-delay: ${delay}s">
            <div class="space">
            <div class="heart">
                     <article>${date}</article>
                    <img src="./picture/heart.svg" alt="">
            </div>
                <h2>${title}</h2>    
                    <p>
                        ${content}
                    </p>
            </div>
        </div>
    </section>
    `
  }

  document.querySelector("#cards").innerHTML = 
      createCard("Tim Berners-Lee vai leiloar código-fonte da web",

      "02 de jul, 2021", 
      
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero." )

      +

      createCard("Tem Firefox novo no pedaço e você vai quer migrar",

      "02 de jul, 2021",

      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.")

       +

      createCard("John MCAfee, criador do antivírus McAfee, morre",

      "02 de jul, 2021",
      
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit lectus libero, id efficitur arcu viverra ac. Etiam sed sagittis velit, vitae convallis turpis. Praesent in purus non tellus tincidunt fermentum eu at sem. Curabitur lacus libero.")
    

