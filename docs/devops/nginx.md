---
sidebar_position: 1
description: ''
---

# NGINX

## Install NGINX on Ubuntu

Simply follow [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04).

## Register New Domain

1. Visit [nic.ir](https://nic.ir/) or any other domain providers and purchase a new domain.
2. Visit [Cloudflare Dashboard](https://dash.cloudflare.com/) and create a new site.
3. Configure domain's nameservers with Cloudflare's.  
   They're usually `kyrie.ns.cloudflare.com` and `laylah.ns.cloudflare.com`.
4. Create an `A` record in Cloudflare DNS section.
5. In the server create a new file in `/etc/nginx/sites-available/`. File name has to be equal to domain.
6. Put any config you want in the file mentioned above.
7. Create a soft link in `/etc/nginx/sites-enabled/`:
    ```shell
    ln -s /etc/nginx/sites-available/$(domain) /etc/nginx/sites-enabled/$(domain)
    ```
8. Make sure the domain has been registered by visiting it and seeing if it returns NGINX default page.  
   You can also visit [nic.ir](https://nic.ir/) and check if it status is changed from `Reserved` to `Registered`.  
   It may take a while, so be patient.
9. Generate HTTPS certificate using [this tutorial](#get-a-free-https-certificate).
10. Create a `$(domain).ssl.conf` file in `/etc/nginx/common-configs/`.
11. Put the SSL configs in the file:
    ```shell
    ssl_certificate /etc/letsencrypt/live/$(domain)/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$(domain)/privkey.pem;
    ```
12. Reload NGINX with `systemctl reload nginx` command.

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
