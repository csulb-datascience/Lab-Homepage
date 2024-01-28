function createTeachingBox(title, subtitle, description, image){
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
            </div>
        </div>
    </section>
    `
}

function renderTeachingBoxes(id, filePath){
    $.getJSON(filePath, function(json) {
        let r = "";
        json.data.forEach(teaching => {
            r += createTeachingBox(teaching.title, teaching.subtitle, teaching.description, teaching.image);
        });
        document.getElementById(id).innerHTML = r;
    });
}