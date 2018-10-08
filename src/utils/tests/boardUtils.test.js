import { filterByCityAndName } from '../boardUtils'
import * as mocks from './mocks/boardUtils'

describe('filterByCityAndName', () => {
  it('should return filtered array by user name', () => {
    expect(filterByCityAndName(mocks.usersMocks, mocks.filterCondition1)).toEqual([{
      ...mocks.usersMocks[0]
    }])
  })

  it('should return filtered array by user city', () => {
    expect(filterByCityAndName(mocks.usersMocks, mocks.filterCondition2)).toEqual([{
      ...mocks.usersMocks[1]
    }])
  })

  it('should return filtered array by user city and user name', () => {
    expect(filterByCityAndName(mocks.usersMocks, mocks.filterCondition3)).toEqual([{
      ...mocks.usersMocks[2]
    }])
  })

  it('should return return empty array if user is correct and city is incorrect', () => {
    expect(filterByCityAndName(mocks.usersMocks, mocks.filterCondition4)).toEqual([])
  })

  it('should not be case-sensitive', () => {
    expect(filterByCityAndName(mocks.usersMocks, mocks.filterCondition5)).toEqual([{
      ...mocks.usersMocks[2]
    }])
  })

  it('should find all users whose name begins with the same letters', () => {
    expect(filterByCityAndName(mocks.usersMocks, mocks.filterCondition6)).toEqual(mocks.usersMocks)
  })
})
