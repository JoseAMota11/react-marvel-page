const http = async <T>(path: string, config: RequestInit): Promise<T> => {
  const request = new Request(path, config);
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error('Could not load info');
  }
  return response.json().catch(() => {
    throw new Error('Error while getting response');
  });
};

const get = <T>(
  path: string,
  options?: object
): Promise<T> => {
  const params = new URLSearchParams();
  const request: RequestInit = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  };

  if (options)
    for (const [key, value] of Object.entries(options)) params.set(key, value);

  const urlPath = `${path}?${params.toString()}`;
  const init = { method: 'GET', ...request };
  return http<T>(urlPath, init);
};

export default get;
