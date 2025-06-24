// API utilities for making requests to the backend
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }

  return res;
}

// Generic fetch function with error handling
export async function apiGet<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    credentials: "include",
  });

  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }

  return await res.json();
}

// POST request helper
export async function apiPost<T>(url: string, data: unknown): Promise<T> {
  const res = await apiRequest('POST', url, data);
  return await res.json();
}

// PUT request helper
export async function apiPut<T>(url: string, data: unknown): Promise<T> {
  const res = await apiRequest('PUT', url, data);
  return await res.json();
}

// DELETE request helper
export async function apiDelete(url: string): Promise<void> {
  await apiRequest('DELETE', url);
}