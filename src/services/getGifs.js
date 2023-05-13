const getGifs = async (textSearch) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=van6TgYELN5976aDZKv0u0jKokzN83Rc&q=${textSearch}&limit=15&offset=0&rating=g&lang=es`
  );
  const data = await response.json();
  return data.data;
};

export default getGifs;
