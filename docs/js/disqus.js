var disqus_config = function () {
    this.page.url = window.location.href;  // ページのURLを動的に取得
    this.page.identifier = document.title; // ページのタイトルを識別子として使用
};

(function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://ippitsu-suzuki.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();