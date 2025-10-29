const t = async (e) => {
  if (e)
    return new Headers(e.headers);
  try {
    const { headers: r } = await import("next/headers");
    return await r();
  } catch {
    throw new Error(
      "Kinde: Failed to read request headers (are you using a Next.js version prior to 13?)"
    );
  }
};
export {
  t as getHeaders
};
