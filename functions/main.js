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
                <li><a href="publications.html">Publications</a></li>
                <li><a href="experience.html">Experience</a></li>
                <li><a href="teaching.html">Teaching</a></li>
                <li><a href="group.html">Group</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    `
}

function createFooter(){
    document.getElementById("contact-custom").innerHTML = `
        <div class="inner">             
            <section class="">
                <section>
                    <div class="contact-method">
                        <span class="icon solid alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">information@untitled.tld</a>
                    </div>
                </section>
                <section>
                    <div class="contact-method">
                        <span class="icon solid alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(000) 000-0000 x12387</span>
                    </div>
                </section>
                <section>
                    <div class="contact-method">
                        <span class="icon solid alt fa-home"></span>
                        <h3>Address</h3>
                        <span>1234 Somewhere Road #5432<br />
                        Nashville, TN 00000<br />
                        United States of America</span>
                    </div>
                </section>
            </section>
        </div>
    `

    document.getElementById("footer").innerHTML = `
        <div class="inner">
            <ul class="icons">
                <li><a href="#" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="#" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
                <li><a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
                <li><a href="#" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
                <li><a href="#" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
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

function createPublicationBox(title, authors, description, scholar_articles, issue, journal, publication_date, pages, publisher, total_citation, volume){
    return `
    <section class="inner">

        <div class="content">
            <div class="inner">
                <header class="major" style="width: auto;">
                    <h2>${title}</h3>
                </header>
                <h4>Authors: ${authors}</h4>
                <p>Description: ${description ?? description}</p>
                <p>Scholar Articles: ${scholar_articles ?? scholar_articles}</p>
                <p>Publisher: ${publisher ?? publisher}</p>
                <p>Publication Date: ${publication_date ?? publication_date}</p>
                <p>Issue: ${issue ?? issue}</p>
                <p>Journal: ${journal ?? journal}</p>
                <p>Pages: ${pages ?? pages}</p>
                <p>Total Citation: ${total_citation ?? total_citation}</p>
                <p>Volume: ${volume ?? volume}</p>
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

function renderPublicationBoxes(id, filePath){
    $.getJSON(filePath, function(json) {
        let r = "";
        json.forEach(research => {
            // Publisher, Total citations, Volume
            d = JSON.parse(research);
            console.log(d);
            Object.keys(d).forEach(key => {

            })
            r += createPublicationBox(d["Title"], 
                                    d["Authors"], 
                                    d["Description"], 
                                    d["Scholar articles"], 
                                    d["Issue"], 
                                    d["Journal"], 
                                    d["Publication date"], 
                                    d["Pages"], 
                                    d["Publisher"], 
                                    d["Total citations"], 
                                    d["Volume"]);
        });
        document.getElementById(id).innerHTML = r;
    });
}


