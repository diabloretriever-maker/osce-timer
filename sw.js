const CACHE = "osce-timer-v2";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon.svg",
  ...["baca","masuk","pindah","selesai","sisa30d","sisa1","sisa2","sisa3","sisa4","sisa5","jeda","lanjut","silent"].map(c => `audio/${c}.mp3`)];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // network first so updates arrive, cache as offline fallback
  e.respondWith(fetch(e.request).then(r => {
    const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
