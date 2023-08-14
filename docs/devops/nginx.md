---
sidebar_position: 1
description: ''
---

# NGINX

## Install NGINX on Ubuntu

Simply follow [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04).

## Get a Free HTTPS Certificate

Visit [certbot website](https://certbot.eff.org/) and choose the web server and system you are using.
After that, certbot will show you constructions to generate a free certificate.

## Restart vs Reload

When you change the config file, there are two ways to make them take effect:

1. `systemctl restart nginx`
2. `systemctl reload nginx`

The first one fully stops NGINX service and then tries to start it again.
It makes any connected client to experience an interruption.
Also, if it fails in the process, the service will remain stopped.

On the other hand, the second one tries to apply changed configs without stopping the service, so it won't interrupt clients.
If it fails in the process, the service will continue using the old configs.

:::caution

If `reload` fails, it will not give you any error in the terminal.  
Check configuration status before reloading the service by using `nginx -t` command.

:::

---

## Check The Last Line of The Log Files

```shell title="Access Log"
tail -1 /var/log/nginx/access.log
```

```shell title="Error Log"
tail -1 /var/log/nginx/error.log
```

---

## Location Blocks Priorities

If there is more than one location block that can satisfy the URL,
NGINX will choose the one that comes first in this list:

1. Exact Match (`location = /some/path`)
2. Preferential Prefix Match (`location ^~ /some/path`)
3. Regex Match (`location ~* /some/.*/path`)
4. Prefix Match (`location /some/path`)
