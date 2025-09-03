export async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(`${process.env.API_URL}${url}`);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}
