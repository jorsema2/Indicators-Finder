async function fetchThis(link) {
    const result = await fetch(link);
    const data = await result.json();
    return data;
}
  
export default fetchThis;