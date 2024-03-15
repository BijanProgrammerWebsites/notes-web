---
sidebar_position: 6
description: ''
---

# Test

## Local SSL

As you may already know, you can expose localhost to your private network, so you can test your app on different devices that are on the same network as your PC.
But in order to test some features, like webcam permission, you need to have SSL certification (`https`) for localhost.
You can easily obtain it using `devcert` npm package.

1. Install it globally
    ```shell
    npm i -g devcert
    ```
2. Open Git Bash (because it can run `openssl` commands)
3. Create a directory to store certification and navigate to it
    ```shell
    cd ~
    mkdir certs
    cd certs
    ```
4. Generate certification for localhost
    ```shell
    devcert generate localhost
    ```
5. Enter a passphrase that you can remember later

Two files will be generated that can be used as `CRT` and `Key` files.

### Expose React App to Local Network with SSL Enabled

Put these in `.env` file of you `create-react-app` project:

```dotenv
HTTPS=true
SSL_CRT_FILE=C:/Users/Bijan/certs/localhost.cert
SSL_KEY_FILE=C:/Users/Bijan/certs/localhost.key
```

Add `host` argument to `start` script of `package.json` file:

```json
{
    "scripts": {
        "start": "react-scripts start --host 0.0.0.0"
    }
}
```

:::info

You also need to disable private network firewall in `Windows Security` settings.

:::
