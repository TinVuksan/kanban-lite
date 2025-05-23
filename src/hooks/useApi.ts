import { useCallback, useEffect, useState } from 'react';
import { axiosInstance } from '../api/axiosInstance';
import { useLocalStorage } from './useLocalStorage';

type Method = 'GET' | 'POST';

interface UseApiOptions<T, R = T> {
    method: Method;
    url: string;
    body?: unknown;
    localStorageKey: string;
    enabled?: boolean;
    transformForLocalStorage?: (data: T) => R;
}

export const useApi = <T, R = T>({
    method,
    url,
    body,
    localStorageKey,
    enabled = true,
    transformForLocalStorage,
}: UseApiOptions<T, R>) => {
    const [data, setData] = useState<R | null>(null);
    const [loading, setLoading] = useState(enabled);
    const [error, setError] = useState<string | null>(null);
    const { getLocalStorageItem, setLocalStorageItem } = useLocalStorage<R>();

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const cached = getLocalStorageItem(localStorageKey);
            if (cached) {
                setData(cached);
                setLoading(false);
                return;
            }

            const res = await axiosInstance.request<T>({
                method,
                url,
                data: body,
            });

            const toStore = transformForLocalStorage
                ? transformForLocalStorage(res.data)
                : (res.data as unknown as R);

            setData(toStore);
            setLocalStorageItem(localStorageKey, toStore);
        } catch (error) {
            if (error instanceof Error) {
                setError(`API call failed: ${error.message}`);
            }
        } finally {
            setLoading(false);
        }
    }, [
        method,
        url,
        body,
        getLocalStorageItem,
        setLocalStorageItem,
        localStorageKey,
        transformForLocalStorage,
    ]);

    useEffect(() => {
        if (enabled) fetchData();
    }, [fetchData, enabled]);

    return { data, loading, error, refetch: fetchData };
};
