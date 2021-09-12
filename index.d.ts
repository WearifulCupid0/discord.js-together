import { VoiceChannel, Invite, CreateInviteOptions } from 'discord.js';

export class VoiceTogetherChannel extends VoiceChannel {
    public createYoutubeTogetherInvite(options: DevelopmentInviteOptions): Promise<Invite>;
    public createPokerInvite(options: CreateInviteOptions): Promise<Invite>;
    public createBetrayalInvite(options: CreateInviteOptions): Promise<Invite>;
    public createFishingInvite(options: CreateInviteOptions): Promise<Invite>;
    public createChessInvite(options: DevelopmentInviteOptions): Promise<Invite>
}

export interface DevelopmentInviteOptions extends CreateInviteOptions {
    dev?: Boolean
}