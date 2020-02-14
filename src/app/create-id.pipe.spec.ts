import { CreateIdPipe } from './create-id.pipe';

describe('CreateIdPipe', () => {
  it('create an instance', () => {
    const pipe = new CreateIdPipe();
    expect(pipe).toBeTruthy();
  });
});
