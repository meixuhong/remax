import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '@alipay/remix-types';

describe.skip('build ali one app', () => {
  runTest('one', Platform.ali, path.resolve(__dirname, `../fixtures/one/expected/ali`));
});
