export const fetcher = async (
  action: string,
  url: string,
  params: any = null,
  token: any = null
) => {
  try {
    const credential = `Bearer ${token}`;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
      method: action,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: credential,
      },
      body: params ? params : null,
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("fetcher_error: ", e);
    throw e;
  }
};
