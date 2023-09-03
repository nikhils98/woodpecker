export function store(url) {
  let urlsStr = localStorage.getItem('urls')

  if(!urlsStr) {
    urlsStr = JSON.stringify([])
  }

  const urls = JSON.parse(urlsStr)
  urls.push(url)

  localStorage.setItem('urls', JSON.stringify(urls))

  console.log(urls);
}