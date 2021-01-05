import { SizeLimitPipe } from './size-limit.pipe';

describe('SizeLimitPipe', () => {
  it('create an instance', () => {
    const pipe = new SizeLimitPipe();
    expect(pipe).toBeTruthy();
  });
});
