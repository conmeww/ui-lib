export const object2class = (prefix :string, props: Object) => {
    let className = ''
    for (const [key, value] of Object.entries(props)) {
      if (typeof value === 'boolean' && value) {
        className += ` ${prefix}-${key}`
      } else if (typeof value === 'string') {
        className += ` ${prefix}-${key}-${value}`
      }
    }
    return className
  }
  export const getColorType = (type: string | undefined): string => {
    const typeMap = {
      normal: 'gray',
      warning: 'orange',
      success: 'green',
      error: 'red',
      danger: 'red',
      info: 'blue',
      primary: 'blue'
    }
    // @ts-ignore
    return typeMap[type] || type
  }