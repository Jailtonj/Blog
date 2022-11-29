const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'pagedart.com';

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}
f.addEventListener('submit', submitted);


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
      createCard("Reino Unido vai multar empresas de tecnologia que não removerem conteúdo de automutilação",

      "27/11/2022", 
      
      "O governo do Reino Unido pretende tornar ilegal o ato de encorajar outras pessoas a se mutilar na internet e multará as empresas de mídia social que não removerem esse tipo material, como parte de uma reformulação da lei que rege o comportamento online." )
      
      +

      createCard("Estádios brasileiros buscam tecnologias parecidas com os do Qatar",

      "29/11/2022", 
      
      "Com alto investimento em tecnologia, a Copa do Mundo no Qatar promete contar com um dos maiores investimentos da história neste setor. Para entrar no país, os torcedores precisam ter o Haya Card, uma espécie de ''passaporte'' que servirá como um documento para os turistas. Além disso, o cartão será utilizado para o controle na venda de bebidas alcoólicas, transporte público e entrada nos estádios." )

      +

      createCard("WhatsApp lança mensagens para o próprio número no Android e iPhone",

      "28/11/2022",

      "A partir desta segunda-feira (28), usuários do WhatsApp no Android e iOS (iPhone) poderão iniciar uma conversa com o próprio contato. A novidade, que já vinha sendo liberada para algumas pessoas, elimina a gambiarra de criar um grupo e depois manter o próprio número.")

       +

      createCard("Live de Casimiro bate novo recorde de espectadores em jogo do Brasil",

      "28/11/2022",

      "Na tarde desta segunda-feira (28), durante a transmissão do jogo entre Brasil e Suíça pela Copa do Mundo 2022, o streamer Casimiro Miguel bateu o seu próprio recorde de espectadores. De acordo com dados do próprio YouTube, a live atingiu mais de 4,3 milhões de dispositivos conectados.") +

      createCard("Nubank lança seguro contra transferências após roubo de celular",

      "28/11/2022",

      "O Nubank anunciou, nesta segunda-feira (28), o lançamento de um novo seguro contra fraudes em transações feitas pelo aplicativo do banco. Caso o usuário tenha o celular furtado ou roubado, ou seja coagido a realizar alguma transação para outra conta, será possível recuperar o dinheiro.",) +

      createCard("Correios lançam rastreamento em tempo real para encomendas Sedex",

      "28/11/2022",

      "Na última sexta-feira (25), durante a Black Friday, os Correios anunciaram o lançamento de uma nova opção no sistema de rastreamento de encomendas da empresa. A partir de agora, será possível realizar rastreamento em tempo real em pedidos feitos por Sedex convencional, Sedex 10, Sedex 12 e Sedex Hoje.",) 

