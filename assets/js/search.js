import Fuse from 'fuse.js';

(function () {
  var input = document.getElementById('blog-search');
  var resultsContainer = document.getElementById('search-results');
  var defaultContent = document.getElementById('default-content');

  if (!input || !resultsContainer || !defaultContent) return;

  var indexUrl = input.dataset.index;
  var fuse = null;
  var index = null;

  function loadIndex() {
    if (index) return Promise.resolve();
    return fetch(indexUrl)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        index = data;
        fuse = new Fuse(data, {
          keys: [
            { name: 'title', weight: 0.4 },
            { name: 'description', weight: 0.3 },
            { name: 'tags', weight: 0.3 }
          ],
          threshold: 0.3,
          ignoreLocation: true
        });
      });
  }

  function renderResults(results) {
    if (results.length === 0) {
      resultsContainer.innerHTML =
        '<p class="text-gray-500 text-sm col-span-full py-4">No posts found.</p>';
      return;
    }

    resultsContainer.innerHTML = results
      .map(function (r) {
        var item = r.item || r;
        var tags = (item.tags || [])
          .map(function (t) {
            return '<li class="text-xs px-2 py-1 rounded-sm bg-gray-200 font-mono uppercase">' + escapeHtml(t) + '</li>';
          })
          .join('');

        return (
          '<div class="overflow-hidden text-left border border-dashed border-gray-500 rounded-sm p-3 bg-white">' +
          '<div class="flex flex-col gap-2"><div>' +
          '<a href="' + escapeHtml(item.url) + '">' +
          '<h3 class="md:text-lg font-serif font-bold capitalize pb-2 border-b border-dashed">' + escapeHtml(item.title) + '</h3></a>' +
          '<time datetime="' + escapeHtml(item.dateMachine) + '" class="text-xs text-gray-500 pt-2 block">' + escapeHtml(item.date) + '</time>' +
          '<p class="leading-normal py-2 text-sm">' + escapeHtml(item.description) + '</p>' +
          '</div>' +
          (tags ? '<div><ul class="flex flex-wrap items-center gap-2">' + tags + '</ul></div>' : '') +
          '</div></div>'
        );
      })
      .join('');
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  input.addEventListener('focus', function () {
    loadIndex();
  });

  input.addEventListener('input', function () {
    var query = input.value.trim();

    if (!query) {
      resultsContainer.classList.add('hidden');
      defaultContent.classList.remove('hidden');
      return;
    }

    loadIndex().then(function () {
      var results = fuse.search(query);
      defaultContent.classList.add('hidden');
      resultsContainer.classList.remove('hidden');
      renderResults(results);
    });
  });
})();
