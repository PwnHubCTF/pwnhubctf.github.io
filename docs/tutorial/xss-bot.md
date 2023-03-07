---
sidebar_position: 4
---

# XSS Bot

If you need an XSS Bot for an XSS Web challenge, you can directly use the PwnHUB bot.

To use this feature, you need to have a the XSS Bot installed: [Instructions here](/docs/installation/xss-bot)

# Usage

[Example challenge](https://github.com/PwnHubCTF/challenges/tree/main/web-xss)

You have to add `xss: true` to your `config.yaml`

The bot is really simple: It will access an URL, with a cookie named `FLAG`, populate with challenge flag.

:::tip
You don't have to take care of the flag for XSS challenges, since the bot has the flag in his cookies
:::

If you need a more complex bot, you need to develop it and integrate it to the challenge

# Monitoring

In `Admin` => `XSS Bot`

You can check the player payloads