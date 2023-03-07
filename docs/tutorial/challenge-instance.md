---
sidebar_position: 3
---

# Challenge Instance

With PwnHUB, you can allow players to deploy their own challenges instances.

This is usually usefull for web/pwn challenges, where the player can break challenge with RCE, or malformatted data.

To use this feature, you need to have a the deployer installed: [Instructions here](/docs/installation/deployer)



# Instance configuration

Now that you have the deployer configured, you can use challenges instances.

It allows you to use `instance: single | multiple` in challenge configuration

Instances challenges need to have a working docker-compose.yml

[Example 1 - tcp](https://github.com/PwnHubCTF/challenges/tree/main/tcp)

[Example 2 - web](https://github.com/PwnHubCTF/challenges/tree/main/web)

:::note
In the docker-compose.yml file, there is only one port binded
:::

### Single instance

A single instance can be deployed by the administrator, and will be used by all the players

### Multiple instance

Multiple instances are deployed by players, when they need it.

## Supervision

In `Admin` => `Dockers`, you can view deployed instances