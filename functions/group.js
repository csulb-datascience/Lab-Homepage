function renderLinks(link, thesis){
    if(link && !thesis){
        return (`
            <li>
                <a href="${link}" class="button" >Learn more</a>
            </li>
            <li>
                <a href="${thesis}" class="button" style="pointer-events:none; cursor: not-allowed !important;">Thesis</a>
            </li>
        `);
    }else if(!link && thesis){
        return (`
            <li>
                <a href="${link}" class="button" style="pointer-events:none; cursor: not-allowed !important;">Learn more</a>
            </li>
            <li>
                <a href="${thesis}" class="button" >Thesis</a>
            </li>
        `);
    }else {
        return (`
            <li>
                <a href="${link}" class="button">Learn more</a>
            </li>
            <li>
                <a href="${thesis}" class="button">Thesis</a>
            </li>
        `);
    }
}

function createImageBox(img, name, email, description, link, thesis){
    let allLinks = renderLinks(link, thesis);
    return `
    <section style="width:100%;">
        <div class="content" style="width:100%">
            <div class="inner">
                <header class="major">
                    <h3>${name}</h3>
                </header>
                <div class="row">
                    <div class="inner col-6 col-12-small">
                        <div>
                            <h4>Email</h4>
                            <p>${email}</p>
                        </div>
                        <div>
                            <h4>Description</h4>
                            <p>${description}</p>
                        </div>

                        <ul class="actions">
                            ${allLinks}
                        </ul>
                    </div>
                    <div class="inner col-6 col-12-small">
                        <span class="image" style="justify-content:center; align-items:center; display:flex;">
                            <img src="${img}" alt=""/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
}

$.getJSON("json_data/group.json", function(json) {
    let r = "";
    json.data.forEach(member => {
        r += createImageBox(member.image, member.name, member.email, member.description, member.link);
    });
    document.getElementById("two").innerHTML = r;
});

