const useHttp = async (url, setIsLoading) => {
  try {
    setIsLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setIsLoading(false);
    return data;
  } catch (error) {
    await Promise.reject(error);
  }
  return null;
};

export default useHttp;
