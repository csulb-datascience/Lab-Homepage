// $.getJSON("tiles.json", function(json) {
//     createTiles(json.data);
// });

function createTile(image, link, title, description){
    return `
        <article>
            <span class="image">
                <img src="${image}" alt="" />
            </span>
            <header class="major">
                <h3><a href="${link}" class="link">${title}</a></h3>
                <p>${description}</p>
            </header>
        </article>
        `;
};

function renderTileObject(){
     // Tiles.
     var $tiles = $('.tiles > article');
     $tiles.each(function() {
 
         var $this = $(this),
             $image = $this.find('.image'), $img = $image.find('img'),
             $link = $this.find('.link'),
             x;
 
         // Image.
 
             // Set image.
                 $this.css('background-image', 'url(' + $img.attr('src') + ')');
 
             // Set position.
                 if (x = $img.data('position'))
                     $image.css('background-position', x);
 
             // Hide original.
                 $image.hide();
 
         // Link.
             if ($link.length > 0) {
 
                 $x = $link.clone()
                     .text('')
                     .addClass('primary')
                     .appendTo($this);
 
                 $link = $link.add($x);
 
                 $link.on('click', function(event) {
 
                     var href = $link.attr('href');
 
                     // Prevent default.
                         event.stopPropagation();
                         event.preventDefault();
 
                     // Target blank?
                         if ($link.attr('target') == '_blank') {
 
                             // Open in new tab.
                                 window.open(href);
 
                         }
 
                     // Otherwise ...
                         else {
 
                             // Start transitioning.
                                 $this.addClass('is-transitioning');
                                 $wrapper.addClass('is-transitioning');
 
                             // Redirect.
                                 window.setTimeout(function() {
                                     location.href = href;
                                 }, 500);
                         }
                 });
             }
     });
}

const l = [
    {
        "image":"https://plus.unsplash.com/premium_photo-1673280731432-9cc09eb20fed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", 
        "link":"index.html", 
        "title":"Home", 
        "description":"Home"
    },
    {
        "image":"https://plus.unsplash.com/premium_photo-1673280731432-9cc09eb20fed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", 
        "link":"index.html", 
        "title":"Research", 
        "description":"Research"
    },
    {
        "image":"https://plus.unsplash.com/premium_photo-1673280731432-9cc09eb20fed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", 
        "link":"index.html", 
        "title":"Publications", 
        "description":"Publications"
    },
    {
        "image":"https://plus.unsplash.com/premium_photo-1673280731432-9cc09eb20fed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", 
        "link":"index.html", 
        "title":"Experience", 
        "description":"Experience"
    },
    {
        "image":"https://plus.unsplash.com/premium_photo-1673280731432-9cc09eb20fed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", 
        "link":"index.html", 
        "title":"Teaching", 
        "description":"Teaching"
    },
    {
        "image":"https://plus.unsplash.com/premium_photo-1673280731432-9cc09eb20fed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", 
        "link":"group.html", 
        "title":"Group", 
        "description":"Group"
    },
    {
        "image":"https://plus.unsplash.com/premium_photo-1673280731432-9cc09eb20fed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", 
        "link":"index.html", 
        "title":"Services", 
        "description":"Services"
    },
    {
        "image":"https://plus.unsplash.com/premium_photo-1673280731432-9cc09eb20fed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", 
        "link":"index.html", 
        "title":"Contact", 
        "description":"Contact"
    }
]

// Get data from tiles.json
$.getJSON("json_data/tiles.json", function(json) {
    let r = "";
    json.data.forEach(tile => {
        r += createTile(tile.image, tile.link, tile.title, tile.description);
    });
    document.getElementById("main-one").innerHTML = r;
});

// Rerender the tile objects after 20ms
setTimeout(() => {
    renderTileObject();
}, 30);


// let r = "";
// l.forEach(tile => {
//     r += createTile(tile.image, tile.link, tile.title, tile.description);
// });
// document.getElementById("main-one").innerHTML = r;


