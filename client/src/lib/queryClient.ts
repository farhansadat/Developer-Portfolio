// Simple query client for frontend-only operations
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

// Mock API request function for frontend-only mode
export const apiRequest = async (url: string, options?: RequestInit) => {
  // In frontend-only mode, we don't make actual API calls
  console.log('Frontend-only mode: API call to', url, 'would be made here');
  return { ok: true, json: () => Promise.resolve({}) };
};