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

const get = <T>(path: string, config: RequestInit): Promise<T> => {
  const init = { method: 'GET', ...config };
  return http<T>(path, init);
};

export default get;
