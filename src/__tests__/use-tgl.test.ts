import { renderHook, act } from '@testing-library/react-hooks';

import { useTgl } from '../use-tgl';

describe('useTgl', () => {
  it('shallow validate if useTgl is defined', () => {
    expect(useTgl).toBeDefined();
  });

  it('should return current.enabled as true', () => {
    const { result } = renderHook(() => useTgl());

    expect(result.current.enabled).toBeTruthy();
  });

  it('should return current.enabled as false', () => {
    const { result } = renderHook(() => useTgl(false));

    expect(result.current.enabled).toBeFalsy();
  });

  it('should update.enabled when trigger switch()', () => {
    const { result } = renderHook(() => useTgl());

    act(() => result.current.switch());

    expect(result.current.enabled).toBeFalsy();
  });

  it('should turn on with on()', () => {
    const { result } = renderHook(() => useTgl(false));

    act(() => result.current.on());

    expect(result.current.enabled).toBeTruthy();
  });

  it('should turn off with off()', () => {
    const { result } = renderHook(() => useTgl());

    act(() => result.current.off());

    expect(result.current.enabled).toBeFalsy();
  });
});
