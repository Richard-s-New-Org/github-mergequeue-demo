import { describe, expect, it } from 'vitest';
import { getGreeting } from './utils';

describe('getGreeting', () => {
  it('returns greeting', () => {
    expect(getGreeting('Point')).toEqual('Hello, Point');
  });
});
