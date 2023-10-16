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

function renderImageBoxes(id, filePath){
    $.getJSON(filePath, function(json) {
        let r = "";
        json.data.forEach(research => {
            r += createImageBox(research.title, research.subtitle, research.description, research.image);
        });
        document.getElementById(id).innerHTML = r;
    });
}



