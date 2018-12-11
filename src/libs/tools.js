export function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
        decodeURIComponent(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
  )
}

/**
 * 判断是否空对象
 * @param {*} data
 */
export const isEmptyObject = function (data) {
  return Object.keys(data).length === 0
}
