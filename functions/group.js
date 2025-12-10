function renderLinks(link, thesis){
    if(link && !thesis){
        return (`
            <li>
                <a href="${link}" class="button" >Learn more</a>
            </li>
        `);
    } else if(!link && thesis){
        return (`
            <li>
                <a href="${thesis}" class="button" >Thesis</a>
            </li>
        `);
    } else if(!link && !thesis){
        return "";
    } else {
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

function createGroupBox(img, name, email, description, link, thesis){
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
                        // <div>
                        //     <h4>Email</h4>
                        //     <p>${email}</p>
                        // </div>
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
                            <img src="${img}" width="250" alt=""/>
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
        r += createGroupBox(member.image, member.name, member.email, member.description, member.link, member.thesis);
    });
    document.getElementById("two").innerHTML = r;
});

