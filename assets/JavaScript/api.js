const listEl = document.querySelector("ul");

fetch("http://api.mediastack.com/v1/news?access_key=a8aeb2951489e97978cb1e3b81aa254e&countries=ar&keywords=cerveza&limit=24")
        .then(res => res.json())
        .then(data => {
                data.data.forEach(post => {
                        listEl.insertAdjacentHTML("beforeend", `<li>
                        <div class="descripton"><a href="${post.url}"><b>${post.title}</b></a></div>
                        <div class="source">- ${post.source}</div></li>`)
                        });
                });
       