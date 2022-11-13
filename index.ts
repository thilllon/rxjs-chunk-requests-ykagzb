import { of, from } from 'rxjs';
import { bufferCount, concatMap, delay, reduce } from 'rxjs/operators';

const patientIds = [
  '111',
  '222',
  '333',
  '444',
  '555',
  '666',
  '777',
  '888',
  '999',
  '000',
];
const chunkSize = 3;

from(patientIds)
  .pipe(bufferCount(chunkSize))
  .subscribe((res) => {
    console.log('res: ', res);
  });
