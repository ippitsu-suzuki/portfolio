var disqus_config = function () {
    this.page.url = window.location.href;
    this.page.identifier = document.title;
};

(function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://ippitsu-suzuki.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();