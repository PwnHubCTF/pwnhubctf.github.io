---
sidebar_position: 1
---

# Platform Installation

Installation of PwnHUB Platform

## For production, with script

Take this [script](https://raw.githubusercontent.com/PwnHubCTF/installation/main/script_front.sh), and copy it on your server.

Set +x right on the script with `chmod +x ./script_front.sh`

<!-- You can also execute this script with a oneliner
```sh
bash <(curl -s https://raw.githubusercontent.com/PwnHubCTF/installation/main/script_front.sh) -d <domain> [-p] password
```
-->
### Script usage

`./script_front.sh -d <domain> [-p] password`

- domain: You need to set a domain here, ex myctf.fr (DNS zone must be configured to target the server)
- if `-p` is set, your instance will be protected by a basic auth. User is `pwnhub`

Now, you can go to your domain url to access PwnHUB Platform
