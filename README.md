# khsavant-proxy

khsavant-proxy is a small Express project that allows [KHSavant](https://github.com/FruityEnLoops/khsavant) to function by proxying Steam API requests on behalf of the browser.

Steam enforces CORS on its API and requires proxying.

### Running

* Clone this repo.
* Copy `config.example.json` to `config.json`, then enter your Steam API key [(get one here)](https://steamcommunity.com/dev/apikey). You can also setup which port the proxy runs on, and the base prefix.
* Install dependencies (`npm i`), then run using `npm run start`.
* Modify KHSavant's `App.vue` depending on how you configured the base prefix and port binding of the proxy.

### Important

This project is supposed to be proxy passed using Apache or nginx.

Here's a configuration example :

```
location /khsavant/proxy/ {
        proxy_pass http://localhost:3113;
}
```

This way you can have both the KHSavant app and proxy running on the same nginx.