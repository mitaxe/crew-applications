export const filterByCityAndName = (users, filters) => {
  const { name, city } = filters
  return users.filter(user => {
    const nameFilter = name !== '' ? user.name.toLowerCase() === name.toLowerCase().trim() : user
    const cityFilter = city !== '' ? user.city.toLowerCase() === city.toLowerCase().trim() : user
    return nameFilter && cityFilter
  })
}
