const listEl = document.querySelector("ul");

fetch("http://api.mediastack.com/v1/news?access_key=ea73438e635740c5abd88b5ec04ab62a&countries=ar&keywords=cerveza&limit=24"
     )
        .then(res => res.json())
        .then(data => {
                data.data.forEach(post => {
                        listEl.insertAdjacentHTML("beforeend", `<li>
                        <div class="descripton"><a href="${post.url}"><b>${post.title}</b></a></div>
                        <div class="source">- ${post.source}</div></li>`)
                        });
                });
       
