---
sidebar_position: 3
---

# XSS Bot

Not required, install it if you need an XSS Bot for your challenge

## For production, with script

Take this [script](https://raw.githubusercontent.com/PwnHubCTF/installation/main/script_bot-xss.sh), and copy it on your server.

Set +x right on the script with `chmod +x ./script_bot-xss.sh`

### Script usage

`./script_bot-xss.sh -t <token>`

- token: GithubUsername:GithubToken, ex Foobar:ghp_dsq5F6ug775zHjif975

> At the end of installation, a token will be printed. You need to keep it and set it in the ctf configuration

By default, the script expose xss bot on port 8090

On the platform, in the `Config` section `xss_bot`, you need to set:

`token` = Previously printed token
`url` = http://SERVER_IP:8090