function createImageBox(img, name, email, description, link){
    return `
    <section>
        <p class="image">
            <img src="${img}" alt="" data-position="center center" />
        </p>

        <div class="content">
            <div class="inner">
                <header class="major">
                    <h3>${name}</h3>
                </header>
                <p>${email}</p>
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

$.getJSON("json_data/group.json", function(json) {
    let r = "";
    json.data.forEach(member => {
        r += createImageBox(member.image, member.name, member.email, member.description, member.image.link);
    });
    document.getElementById("two").innerHTML = r;
});

