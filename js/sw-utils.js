// Guardar en el cache dinamico
function actualizaCacheDinamico(dynamicCache, req, res) {
    // si existe la respuesta lo guarda en el cache
    if (res.ok) {
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();
        });
    } else {
        return res;
    }
}