self.addEventListener('install', function (e) {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', function (event) {
  // Lascia che il browser gestisca la richiesta normalmente
});
