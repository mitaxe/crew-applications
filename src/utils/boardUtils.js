export const filterByCityAndName = (users, filters) =>
  users.filter(user => {
    const filtered = Object.keys(filters).map(key => user[key].indexOf(filters[key]) !== -1)
    return filtered.every(item => item)
  })
