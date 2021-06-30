import { StrFormatPipe } from './strformat.pipe';

describe('StrformatPipe', () => {
  let fixture;
  beforeEach(() => {
    fixture = new StrFormatPipe();
  })
  it('create an instance', () => {
    const pipe = new StrFormatPipe();
    expect(pipe).toBeTruthy();
  });
   // Specs with assertions
   it('should expose a transform() method', () => {
    expect(typeof StrFormatPipe).toEqual('function');
  });

  it('should transform() method return string', () => {
    expect(typeof fixture.transform('Avensys Singapore')).toEqual('string');
  });
});
