---
sidebar_position: 1
---

# With Github

This is the recommend way to setup challenges

With this method, you can connect to a github repository, and sync challenges directly from your repo.

This is easier to collabore on challenges, and keep them up to date.

## Setup repository

First, you need to create a github repository.

You also probably want the repository to be `private`, to avoid players to find this repository

Please use the branch `main` by default. This is the sync branch, and can't be changed for now

## Link the github repository

**On PwnHUB**

Go to `Admin` -> `Config`, in `Github` part

You need to specify your `repo_url`, like `github.com/user/ctf_v3`

:::tip 
Challenges are fetched on `main` branch on your github.
:::

### Private repository
If the repo is private, you need a token, linked to your github account in order to fetch the repo

Generate a token:
- go to `https://github.com/settings/tokens`
- Generate new token (classic)
- Check `repo` permission
- Generate token

On PwnHUB config, populate `access_token` with this token

# Challenges Configuration

Now that you have your repository linked, you need to configure your challenges.

:::tip 
There is a lot of exemple is *[this repository](https://github.com/PwnHubCTF/challenges)*.
:::

- Add a file `config.yaml` at the root of the challenge

Configuration example

```yml title="config.yaml"
id: id-of-challenge # Not required, but usefull for challenge dependencies
name: Xored # Display name
category: crypto # Choice in web | crypto | pwn | reverse | forensic | osint | stegano | misc | prog. If you set a random value, like 'my custom category', it will juste display it on front end without a category icon
web: false # true or false: if it's a challenge exposing a web interface
xss: false # true or false: (must be set as "web: true" if xss is true) Activate an XSS Bot for the challenge. More infos in XSS Bot section
flag: PWNME{je-suis-un-flag} # The flag to validate the challenge
sign_flag: false # If this variable is set to true, the flag will be signed for each user. This feature is related to instance
author: eteck # Author of the challenge. Not required
instance: false # Choice in false | single | multiple. More infos in Challenge Instance section
difficulty: 1 # Choice in 0 | 1 | 2 | 3 | 4
tags: # Challenge tags. Not required
  - tag1
  - tag2
files: # The files accessible to the players. Not required
  - source.py
```

- Add a file `description.md` with the description of the challenge

```md title="description.md"
I'm the *challenge* description! I support basic Markdown format
```

Your challenge is now ready to be imported on the platform.

**Go to Admin => Challenges** and click **Get challenges from Github**.

After few seconds, your challenge is imported in the platform.

Right after an import, you can check logs to see what's happened, at the bottom of the page.

:::tip Challenge update
If you need to update a challenge, you need to delete it in the Challenge list, and re-import challenges from github
:::


<!-- **At the moment when the user is supposed to get the flag**
- Ask the user to give his ID
- Generate the flag with the route
`GET /challenge/flag/:challenge_id/:user_id`
- Give him the generated flag -->
