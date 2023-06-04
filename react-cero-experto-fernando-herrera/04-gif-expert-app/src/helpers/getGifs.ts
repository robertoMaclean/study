export const getGifts = async (category: string) => {
  const url =
    `https://api.giphy.com/v1/gifs/search?api_key=z3Yz571Mw1AtJg8xnQMBU4XGk8NGJFdN&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);
};
