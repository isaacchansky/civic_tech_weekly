(function(){
    var TEMPLATES = {
        vimeo_embed: function(code) {
            return '<iframe src="https://player.vimeo.com/video/'+code+'" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        }
    };

    function templateToDOM (template) {
        var d = document.createElement('div');
        d.innerHTML = template;
        return d;
    }

    function expandVideoLinks () {
        var vimeoLinks = document.querySelectorAll('.video-embed');

        Array.from(vimeoLinks).forEach(function(el) {
            var href = el.querySelector('a').href,
                code,
                template;
            if(href.indexOf('vimeo') > -1) {
                // crude regex to find sequence of numbers after /
                code = href.match(/\/([0-9]+)/)[1]
                template = TEMPLATES.vimeo_embed(code);
            }

            if(template) {
                el.appendChild( templateToDOM(template));
            }
        });
    }


    expandVideoLinks();

})();
