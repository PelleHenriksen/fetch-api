const service = {};

service.getMoments = async () => {
  try {
    const response = await fetch("https://onedayviborg.webmcdm.dk/api/moments");
    const moments = await response.json();
    return moments;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
};

service.getCarousels = async () => {
  try {
    const response = await fetch("https://onedayviborg.webmcdm.dk/api/moments");
    const moments = await response.json();
    return moments;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
};

export default service;
