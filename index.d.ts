import { VoiceChannel, Invite, CreateInviteOptions } from 'discord.js';

export class VoiceTogetherChannel extends VoiceChannel {
    public createYoutubeTogetherInvite(options: CreateInviteOptions): Promise<Invite>;
    public createPokerInvite(options: CreateInviteOptions): Promise<Invite>;
    public createBetrayalInvite(options: CreateInviteOptions): Promise<Invite>;
    public createFishingInvite(options: CreateInviteOptions): Promise<Invite>;
    public createChessInvite(options: ChessInviteOptions): Promise<Invite>
}

export interface ChessInviteOptions extends CreateInviteOptions {
    dev?: Boolean
}