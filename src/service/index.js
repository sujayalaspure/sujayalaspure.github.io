const mediumUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sujayalaspure"

export const getMediumPosts = async () => {
  const response = await fetch(mediumUrl)
  const json = await response.json()
  return json.items
}
