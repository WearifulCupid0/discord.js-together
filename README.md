<p align="center">
<h1><strong>Discord.js Together</strong></h1>

[![NPM](https://nodei.co/npm/discord.js-together.png)](https://nodei.co/npm/discord.js-together)

A simple package for [Discord.JS](https://www.npmjs.com/package/discord.js) for creating activities invites.

# 📌 Installing

With NPM
```
npm install discord.js-together
```

With yarn
```
yarn add discord.js-together
```

*Note: This package uses the lastest version of Discord.JS*

# 🔌 Usage

For creating any invite, you can only do that with [VoiceChannel](https://discord.js.org/#/docs/main/stable/class/VoiceChannel) structure, in other words **you can't create this invites in [StageChannels](https://discord.js.org/#/docs/main/stable/class/StageChannel).**

Example coding:
```js
require('discord.js-together') //You have to do that to apply discord.js-together functions.
const { Client } = require('discord.js');
const client = new Client(/*Your options here.*/);

client.on('ready', () => {
    const channel = client.channels.cache.get('Your voice channel ID.');
    channel.createYoutubeTogetherInvite()
    .then(invite => console.log(invite.url));
});

//You also can use this in a message event.
client.on('messageCreate', message => {
    message.member.voice.channel.createYoutubeTogetherInvite()
    .then(invite => message.reply(invite.url));
});

client.login('Your Discord Bot token here.');
```

# 📚 Documentation

*Note: All functions returns a promise with [Invite](https://discord.js.org/#/docs/main/stable/class/Invite) structure.*

```js
/**
 * Create a youtube together invite.
 * 
 * @param {Object} options - You can pass parameter "dev" for creating a development youtube together,
 * all the other options you can find [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createYoutubeTogetherInvite(options)

/**
 * Create a poker invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createPokerInvite(options)

/**
 * Create a betrayal invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createBetrayalInvite(options)

/**
 * Create a fishing invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createFishingInvite(options)

/**
 * Create a chess invite.
 * REQUIRES A SERVER BOOST TIER 1 OR UPPER TO CREATE
 * 
 * @param {Object} options - You can pass parameter "dev" for creating a development chess,
 * all the other options you can find [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createChessInvite(options)

/**
 * Create a letter tile invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createLetterTileInvite(options)

/**
 * Create a word snack invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createWordSnackInvite(options)

/**
 * Create a doodle crew invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createDoodleCrewInvite(options)

/**
 * Create an awkword invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createAwkwordInvite(options)

/**
 * Create a spell cast invite.
 * REQUIRES A SERVER BOOST TIER 1 OR UPPER TO CREATE
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createSpellCastInvite(options)

/**
 * Create a checkers invite.
 * REQUIRES A SERVER BOOST TIER 1 OR UPPER TO CREATE
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createCheckersInvite(options)

/**
 * Create a putt party invite.
 * REQUIRES A SERVER BOOST TIER 1 OR UPPER TO CREATE
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createPuttPartyInvite(options)

/**
 * Create a sketch heads invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createSketchHeadsInvite(options)

/**
 * Create a spell cast invite.
 * 
 * @param {Object} options - Default invite options,
 * you can find then [here](https://discord.js.org/#/docs/main/stable/typedef/CreateInviteOptions)
 */
VoiceChannel.createOchoInvite(options)
```