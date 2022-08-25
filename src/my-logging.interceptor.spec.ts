import { MyLoggingInterceptor } from './my-logging.interceptor';

describe('MyLoggingInterceptor', () => {
  it('should be defined', () => {
    expect(new MyLoggingInterceptor()).toBeDefined();
  });
});
