const apiKey = {
  key: 'ea03d50d-6117-4ea3-abf1-09a948e9d5a5'
}

fetch(
  `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apiKey.key}`
)
  .then(response => {
    if (!response.ok)
      throw new Error(`Error on requisition. Status ${response.status}`)
    return response.json()
  })
  .then(api => {
    console.log(api)
    let text = ''
    // Get 20 coins on API
    for (let i = 0; i <= 20; i++) {
      text =
        text +
        `
        <section id = "coinsName">
  <div class="media">
     <img src="/assets/img/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
      <div class="media-body">
       <h5 class="mt-2">${api.data[i].name}</h5>
       <p>${api.data[i].symbol}</p>
      </div>
     </div>
     </section>
  `
      document.getElementById('coins').innerHTML = text
    }
  })
  .catch(error => {
    console.error(error.message)
  })
