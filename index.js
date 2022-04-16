'use strict';

const { APPLICATIONS, INVITE_TARGET_TYPES } = require('./Constants');
const { VoiceChannel, Invite } = require('discord.js');

Object.assign(VoiceChannel.prototype, {
    /**
     * Create an youtube together invite to the voice channel.
     * @param {DevelopmentInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an youtube invite to the voice channel
     * channel.createYoutubeTogetherInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createYoutubeTogetherInvite(options = {}) {
        const dev = !!(options && options.dev);
        return this.createInvite({
            ...options,
            targetApplication: dev ? APPLICATIONS.YOUTUBE_DEV : APPLICATIONS.YOUTUBE,
            targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
        });
    },

    /**
     * Create an poker invite to the voice channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an poker invite to the voice channel
     * channel.createPokerInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createPokerInvite(options = {}) {
        if (this.guild?.premiumTier === 'NONE') return Promise.reject('VoiceChannel#createPokerInvite only tier 1 or upper boosted servers can start this activity.');
        return this.createInvite({
            ...options,
            targetApplication: APPLICATIONS.POKER,
            targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
        });
    },

    /**
     * Create an betrayal invite to the voice channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an betrayal invite to the voice channel
     * channel.createBetrayalInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createBetrayalInvite(options = {}) {
        return this.createInvite({
            ...options,
            targetApplication:
            APPLICATIONS.BETRAYAL,
            targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
        });
    },

    /**
     * Create an fishing invite to the voice channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an fishing invite to the voice channel
     * channel.createFishingInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createFishingInvite(options = {}) {
        return this.createInvite({
            ...options,
            targetApplication: APPLICATIONS.FISHING,
            targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
        });
    },

    /**
     * Create an chess invite to the voice channel.
     * @param {DevelopmentInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an chess invite to the voice channel
     * channel.createChessInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createChessInvite(options = {}) {
        if (this.guild?.premiumTier === 'NONE') return Promise.reject('VoiceChannel#createChessInvite only tier 1 or upper boosted servers can start this activity.');
        const dev = !!(options && options.dev);
        return this.createInvite({
            ...options,
            targetApplication: dev ? APPLICATIONS.CHESS_DEV : APPLICATIONS.CHESS,
            targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
        });
    },

    /**
     * Create an letter tile invite to the voice channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an letter tile invite to the voice channel
     * channel.createLetterTileInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createLetterTileInvite(options = {}) {
        return this.createInvite({
            ...options,
            targetApplication: APPLICATIONS.LETTER_TILE,
            targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
        });
    },

    /**
     * Create an word snack invite to the voice channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an word snack invite to the voice channel
     * channel.createWordSnackInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createWordSnackInvite(options = {}) {
        return this.createInvite({
            ...options,
            targetApplication: APPLICATIONS.WORD_SNACK,
            targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
        });
    },

    /**
     * Create an doodle crew invite to the voice channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an doodle crew invite to the voice channel
     * channel.createDoodleCrewInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createDoodleCrewInvite(options = {}) {
        return this.createInvite({
            ...options,
            targetApplication: APPLICATIONS.DOODLE_CREW,
            targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
        });
    },

    /**
     * Create an awkword invite to the voice channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an doodle crew invite to the voice channel
     * channel.createAwkwordInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createAwkwordInvite(options = {}) {
        return this.createInvite({
            ...options,
            targetApplication: APPLICATIONS.AWKWORD,
            targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
        })
    },

    /**
     * Create an spell cast invite to the voice channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an doodle crew invite to the voice channel
     * channel.createSpellCastInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createSpellCastInvite(options = {}) {
        if (this.guild?.premiumTier === 'NONE') return Promise.reject('VoiceChannel#createSpellCast only tier 1 or upper boosted servers can start this activity.');
        return this.createInvite({
            ...options,
            targetApplication: APPLICATIONS.SPELL_CAST,
            targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
        });
    },

    /**
     * Create an checkers invite to the voice channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an doodle crew invite to the voice channel
     * channel.createCheckersInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createCheckersInvite(options = {}) {
        if (this.guild?.premiumTier === 'NONE') return Promise.reject('VoiceChannel#createCheckers only tier 1 or upper boosted servers can start this activity.');
        return this.createInvite({
            ...options,
            targetApplication: APPLICATIONS.CHECKERS,
            targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
        });
    },

    /**
     * Create an putt party invite to the voice channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an doodle crew invite to the voice channel
     * channel.createPuttPartyInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createPuttPartyInvite(options = {}) {
        if (this.guild?.premiumTier === 'NONE') return Promise.reject('VoiceChannel#createPuttParty only tier 1 or upper boosted servers can start this activity.');
        return this.createInvite({
            ...options,
            targetApplication: APPLICATIONS.PUTT_PARTY,
            targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
        });
    },

    /**
     * Create an sketch heads invite to the voice channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an doodle crew invite to the voice channel
     * channel.createSketchHeadsInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createSketchHeadsInvite(options = {}) {
        return this.createInvite({
            ...options,
            targetApplication: APPLICATIONS.SKETCH_HEADS,
            targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
        });
    },

    /**
     * Create an ocho invite to the voice channel.
     * @param {CreateInviteOptions} [options={}] The options for creating the invite.
     * @returns {Promise<Invite>}
     * @readonly
     * @example
     * // Create an doodle crew invite to the voice channel
     * channel.createOchoInvite()
     *   .then(console.log)
     *   .catch(console.error);
     */
    createOchoInvite(options = {}) {
        return this.createInvite({
            ...options,
            targetApplication: APPLICATIONS.OCHO,
            targetType: INVITE_TARGET_TYPES.EMBEDDED_APPLICATION
        });
    }
});