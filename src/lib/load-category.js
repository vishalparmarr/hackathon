export async function loadCategory() {
  const res = await fetch('http://server.udayps.com:7000/api/category/show')
  const data = await res.json();
  return data
}