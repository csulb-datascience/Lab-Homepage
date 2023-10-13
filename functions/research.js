function createImageBox(title, subtitle, description, image, link){
    return `
    <section class="inner">
        <p class="image">
            <img src="${image}" alt="" data-position="center center" />
        </p>

        <div class="content">
            <div class="inner">
                <header class="major">
                    <h2>${title}</h3>
                </header>
                <h4>${subtitle}</h4>
                <p>${description}</p>
                <ul class="actions">
                    <li>
                        <a href="${link}" class="button">Learn more</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    `
}

$.getJSON("json_data/research.json", function(json) {
    let r = "";
    json.data.forEach(research => {
        r += createImageBox(research.title, research.subtitle, research.description, research.image);
    });
    document.getElementById("two").innerHTML = r;
});

