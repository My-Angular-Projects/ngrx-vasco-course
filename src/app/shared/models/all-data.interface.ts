import { IParticipant } from '@shared/models/participant.interface';
import { IThread } from '@shared/models/thread.interface';
import { IMessage } from '@shared/models/message.interface';

export interface IAllData {
  participants: IParticipant[];
  threads: IThread[];
  messages: IMessage[];
}
