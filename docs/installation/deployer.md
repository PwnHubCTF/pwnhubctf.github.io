---
sidebar_position: 2
---

# Instance Deployer

Not required, install it if you want players to be able to deploy their own challenge instances

You can install the challenge deployer on the same server as the PwnHUB Platform, but it's recommended to have a dedidacted for the deployer. 

## For production, with script

Take this [script](https://raw.githubusercontent.com/PwnHubCTF/installation/main/script_deployer.sh), and copy it on your server.

Set +x right on the script with `chmod +x ./script_deployer.sh`

### Script usage

`./script_deployer.sh -t <token> -d <domain>`

- token: GithubUsername:GithubToken, ex Foobar:ghp_dsq5F6ug775zHjif975
- domain: url or ip of the server, ex 56.43.32.55

> At the end of installation, a token will be printed. You need to keep it and set it in the ctf configuration

By default, the script expose xss bot on port 3000

On the platform, in the `Config` section `deployer`, you need to set:

`token` = Previously printed token
`url` = http://SERVER_IP:3000