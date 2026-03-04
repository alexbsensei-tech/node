async function run() {
  try {
    const data = await fetchData();
    console.log("Success:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}
    fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => { 0.5 > Math.random() ? resolve("Data fetched") : reject("Fetch error"); }, 1000);
  });
}