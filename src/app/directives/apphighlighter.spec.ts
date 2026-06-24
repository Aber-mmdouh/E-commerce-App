import { Apphighlighter } from './apphighlighter';
import { ElementRef } from '@angular/core';

describe('Apphighlighter', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new Apphighlighter(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
