export function camelize(str: string): string {
  return str.replace(/-(\w)/g, (_: any, p: string) => p.toUpperCase())
}

export function bigCamelize(str: string): string {
  return camelize(str).replace(str.charAt(0), str.charAt(0).toUpperCase())
}

export interface PCLocationInfo {
  language: string
  menuName: string
}

export function getPCLocationInfo() {
  const [, language, menuName] = window.location.hash.split('/')

  return {
    language,
    menuName
  }
}

export function isPhone() {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
}