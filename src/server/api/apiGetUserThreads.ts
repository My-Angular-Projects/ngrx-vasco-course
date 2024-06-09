import { Application, Request, Response } from 'express';
import { findDbThreadsPerUser } from '../persistence/findDbThreadsPerUser';
import _ from 'lodash';
import { dbMessages, dbParticipants } from '../db-data';
import { IAllData, IMessage } from '@shared/models';

export function apiGetUserThreads(app: Application) {
  app.route('/api/threads').get((req: Request, res: Response) => {
    const participantId = 1;

    const threadsPerUser = findDbThreadsPerUser(participantId);

    let messages: IMessage[] = [],
      participantIds: string[] = [];

    threadsPerUser.forEach((thread) => {
      const threadMessages: IMessage[] = _.filter(
        dbMessages,
        (message: any) => message.threadId == thread.id,
      );

      messages = messages.concat(threadMessages);

      participantIds = participantIds.concat(_.keys(thread.participants));
    });

    const participants = _.uniq(
      participantIds.map((participantId: any) => dbParticipants[participantId]),
    );

    const response: IAllData = {
      participants,
      messages,
      threads: threadsPerUser,
    };

    res.status(200).json(response);
  });
}
