import type { Response } from 'express';
import statusServiceMock from '../../../status/tests/mocks/status.service.mock';

export class AppControllerMock {
    index(res: Response) {
        void res;
        return this.status();
    }

    status() {
        return Promise.resolve(statusServiceMock.show());
    }
}
export default new AppControllerMock();
