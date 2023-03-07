---
sidebar_position: 1
---

# Platform Installation

## For production, with script

Take this [script](https://raw.githubusercontent.com/PwnHubCTF/installation/main/script_front.sh), and copy it on your server.

Set +x right on the script with `chmod +x ./script_front.sh`

### Script usage

`./script_front.sh -t <token> -d <domain> [-p]`

- token: GithubUsername:GithubToken, ex Foobar:ghp_dsq5F6ug775zHjif975
- domain: You need to set a domain here, ex myctf.fr (DNS zone must be configured to target the server)
- if `-p` is set, your instance will be protected by a basic auth. User is `pwnhub`, and password is printed at the end

Now, you can go to your domain url