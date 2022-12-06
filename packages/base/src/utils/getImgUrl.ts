export const getImageUrl = (name: string): string => {
  return new URL(import.meta.env.BASE_URL + 'img/' + name + '.png', import.meta.url).href
}
