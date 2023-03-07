---
sidebar_position: 5
---

# Signed Flag

This feature allows flag to be unique for each players.

It can be usefull to reduce flag sharing.

## Usage

The is multiple ways to use this feature

### Way 1 - Multiple instance challenge

Challenge must:
- Be a `multiple` instance
- Use an env var `FLAG` to set the flag.

[Exemple](https://github.com/PwnHubCTF/challenges/tree/main/web)

### Way 2 - XSS challenge

Challenge must:
- Be a `multiple` or `single` instance
- Be a web challenge, with `xss: true`

[Exemple](https://github.com/PwnHubCTF/challenges/tree/main/web-xss)


Then, you need to set `sign_flag: true` in your challenge `config.yaml`

