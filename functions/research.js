function createResearchBox(title, authors, description, journal, publication_date, link){
    return `
    <section class="inner">

        <div class="content">
            <div class="inner">
                <header class="major" style="width: auto;">
                    <h2>${title}</h3>
                </header>
                <article>
                    <h4>Authors</h4>
                    <p>${authors}</p>
                </article>
                ${description ?
                    `<article>
                        <h4>Description</h4>
                        <p>${description}</p>
                    </article>`
                    : ""
                }
                <div class="row">
                <article class="col-3 col-12-small">
                    <h4>Journal / Conference</h4>
                    <p>${journal}</p>
                </article>
                <article class="col-3 col-12-small">
                    <h4>Publication Date</h4>
                    <p>${publication_date}</p>
                </article>
                </div>
            

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

function renderResearchBoxes(id, filePath){
    $.getJSON(filePath, function(json) {
        let r = "";
        
        json.forEach(research => {
            // console.log(research["Journal"] ?? research["Book"], research["Book"])
            let journalAndConference = research["Journal"] ?? research["Book"] ?? research["Conference"] ?? research["Institution"];
            if (journalAndConference === undefined)
                journalAndConference = "Error"
            r += createResearchBox(research["Title"], 
                                    research["Authors"], 
                                    research["Description"], 
                                    journalAndConference, 
                                    research["Publication date"],
                                    research["Link"], );
        });
        document.getElementById(id).innerHTML = r;
    });
}
