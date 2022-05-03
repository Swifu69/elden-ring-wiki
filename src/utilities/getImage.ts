function getImageUrl(name: string): string {
    return new URL(`/${name}.png`, import.meta.url).href
  }
  
export default getImageUrl