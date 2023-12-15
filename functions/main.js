function createHeader(){
    document.getElementById("header").innerHTML = `
        <a href="index.html" class="logo">
            <strong>Ju Cheol Moon</strong> <span>'s Homepage</span>
        </a>
        <nav>
            <a href="#menu">Menu</a>
        </nav>
    `
}

function createMenu(){
    document.getElementById("menu").innerHTML = `
        <div class="inner">
            <ul class="links">
                <li><a href="index.html">Home</a></li>
                <li><a href="research.html">Research</a></li>
                <li><a href="teaching.html">Teaching</a></li>
                <li><a href="group.html">Group</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    `
}

// Address => size 3
function createFooter(email, phone, address, social){

    document.getElementById("contact-custom").innerHTML = `
        <div class="inner">             
            <section class="">
                <section>
                    <div class="contact-method">
                        <span class="icon solid alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">${email}</a>
                    </div>
                </section>
                <section>
                    <div class="contact-method">
                        <span class="icon solid alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>${phone}</span>
                    </div>
                </section>
                <section>
                    <div class="contact-method">
                        <span class="icon solid alt fa-home"></span>
                        <h3>Address</h3>
                        <span>
                            ${address[0]}</br>
                            ${address[1]}</br>
                            ${address[2]}</br>
                        </span>
                    </div>
                </section>
            </section>
        </div>
    `

    document.getElementById("footer").innerHTML = `
        <div class="inner">
            <ul class="icons">
                <li><a href="${social['linkedIn']}" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
            </ul>
            <ul class="copyright">
                <li>&copy; 2023 All Rights Reserved</li>
            </ul>
        </div>
    `
}

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
                    <h4>Journal</h4>
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

function renderImageBoxes(id, filePath){
    $.getJSON(filePath, function(json) {
        let r = "";
        json.data.forEach(research => {
            r += createImageBox(research.title, research.subtitle, research.description, research.image);
        });
        document.getElementById(id).innerHTML = r;
    });
}

function renderResearchBoxes(id, filePath){
    $.getJSON(filePath, function(json) {
        let r = "";
        
        json.forEach(research => {
            // console.log(research["Journal"] ?? research["Book"], research["Book"])
            r += createResearchBox(research["Title"], 
                                    research["Authors"], 
                                    research["Description"], 
                                    research["Journal"] ?? research["Book"], 
                                    research["Publication date"],
                                    research["Link"], );
        });
        document.getElementById(id).innerHTML = r;
    });
}


