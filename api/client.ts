export async function fetcher<T>(url: string): Promise<T> {
  const fullUrl = `${process.env.API_URL}${url}`;

  try {
    const res = await fetch(fullUrl);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    return (await res.json()) as T;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch ${url}: ${error.message}`);
    }
    throw new Error(`Failed to fetch ${url}: Unknown error`);
  }
}
