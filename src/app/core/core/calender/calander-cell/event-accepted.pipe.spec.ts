import { EventMarkedPipe } from './event-accepted.pipe';

describe('EventAcceptedPipe', () => {
  it('create an instance', () => {
    const pipe = new EventMarkedPipe();
    expect(pipe).toBeTruthy();
  });
});
