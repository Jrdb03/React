import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";
import { renderHook } from '@testing-library/react';

describe('useCounter', () => {
    test('should inizializate with default value of 10', () => {
        const { } = renderHook(() => useCounter());

        expect(counter).toBe(10);
    })
})