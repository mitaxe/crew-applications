export const filterByCityAndName = (users, filters) =>
  users.filter(user => {
    const filtered = Object.keys(filters).map(key =>
      user[key].toLowerCase().trim().indexOf(filters[key].toLowerCase().trim()) === 0)
    return filtered.every(item => item)
  })
