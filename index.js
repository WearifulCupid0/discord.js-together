'use strict';

const { APPLICATIONS } = require('./Constants');
const { VoiceChannel, Invite } = require('discord.js');

Object.assign(VoiceChannel.prototype, {
    /**
     * Create an youtube together invite to this voice channel.
     * @param {DevelopmentInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an youtube invite to this voice channel
     * channel.createYoutubeTogetherInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createYoutubeTogetherInvite(options = {}) {
        const dev = !!(options && options.dev);
        return this.createInvite({ ...options, targetApplication: dev ? APPLICATIONS.YOUTUBE_DEV : APPLICATIONS.YOUTUBE, targetType: 2 });
    },

    /**
     * Create an poker invite to this voice channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an poker invite to this voice channel
     * channel.createPokerInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createPokerInvite(options = {}) {
        return this.createInvite({ ...options, targetApplication: APPLICATIONS.POKER, targetType: 2 });
    },

    /**
     * Create an betrayal invite to this voice channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an betrayal invite to this voice channel
     * channel.createBetrayalInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createBetrayalInvite(options = {}) {
        return this.createInvite({ ...options, targetApplication: APPLICATIONS.BETRAYAL, targetType: 2 });
    },

    /**
     * Create an fishing invite to this voice channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an fishing invite to this voice channel
     * channel.createFishingInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createFishingInvite(options = {}) {
        return this.createInvite({ ...options, targetApplication: APPLICATIONS.FISHING, targetType: 2 });
    },

    /**
     * Create an chess invite to this voice channel.
     * @param {DevelopmentInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an chess invite to this voice channel
     * channel.createChessInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createChessInvite(options = {}) {
        const dev = !!(options && options.dev);
        return this.createInvite({ ...options, targetApplication: dev ? APPLICATIONS.CHESS_DEV : APPLICATIONS.CHESS, targetType: 2 });
    }
});