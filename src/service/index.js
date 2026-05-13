const mediumUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sujayalaspure"

export const getMediumPosts = async () => {
  const response = await fetch(mediumUrl)
  const json = await response.json()
  return json.items
}

export const getMediumPostThumbnail = (content) => {
  const pattern = /<figure><img\s+alt="[^"]*"\s+src="([^"]+)"/
  const matches = content.match(pattern)

  if (matches && matches.length > 1) {
    const imageLink = matches[1]
    return imageLink
  } else {
    return null
  }
}
