import { dbThreads } from '../db-data';
import _ from 'lodash';
import { IThread } from '@shared/models';

export function findDbThreadsPerUser(participantId: number) {
  const allThreads: IThread[] = _.values<IThread>(dbThreads);

  return _.filter(allThreads, (thread) =>
    _.includes(_.keys(thread.participants), participantId.toString()),
  );
}
