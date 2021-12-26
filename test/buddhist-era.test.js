const moment = require('moment-timezone')
require('../lib/moment-buddhist-era')

beforeEach(() => {
  moment.locale('th')
  moment.tz.setDefault('Asia/Bangkok')
})

describe('buddhist-era', () => {
  test('Should return corrent date and time in LLLL format', () => {
    expect(moment('2019-06-27T02:15:07+07:00').format('LLLL')).toStrictEqual('วันพฤหัสบดีที่ 27 มิถุนายน 2562 เวลา 2:15')
  })

  test('Should return correct date without time in LLLL format', () => {
    expect(moment('2019-06-27').format('LLLL')).toStrictEqual('วันพฤหัสบดีที่ 27 มิถุนายน 2562 เวลา 0:00')
  })

  test('Should return corrent date and time in llll format', () => {
    expect(moment('2019-06-27T02:15:07+07:00').format('llll')).toStrictEqual('วันพฤหัสที่ 27 มิ.ย. 2562 เวลา 2:15')
  })

  test('Should return correct date without time in llll format', () => {
    expect(moment('2019-06-27').format('llll')).toStrictEqual('วันพฤหัสที่ 27 มิ.ย. 2562 เวลา 0:00')
  })

  test('Should return corrent date and time in LLL format', () => {
    expect(moment('2019-06-27T02:15:07+07:00').format('LLL')).toStrictEqual('27 มิถุนายน 2562 เวลา 2:15')
  })

  test('Should return correct date without time in LLL format', () => {
    expect(moment('2019-06-27').format('LLL')).toStrictEqual('27 มิถุนายน 2562 เวลา 0:00')
  })

  test('Should return corrent date and time in lll format', () => {
    expect(moment('2019-06-27T02:15:07+07:00').format('lll')).toStrictEqual('27 มิ.ย. 2562 เวลา 2:15')
  })

  test('Should return correct date without time in lll format', () => {
    expect(moment('2019-06-27').format('lll')).toStrictEqual('27 มิ.ย. 2562 เวลา 0:00')
  })

  test('Should return corrent date and time with LL format', () => {
    expect(moment('2019-06-27T02:15:07+07:00').format('LL')).toStrictEqual('27 มิถุนายน 2562')
  })

  test('Should return correct date without time in LL format', () => {
    expect(moment('2019-06-27').format('LL')).toStrictEqual('27 มิถุนายน 2562')
  })

  test('Should return corrent date and time in ll format', () => {
    expect(moment('2019-06-27T02:15:07+07:00').format('ll')).toStrictEqual('27 มิ.ย. 2562')
  })

  test('Should return correct date without time in ll format', () => {
    expect(moment('2019-06-27').format('ll')).toStrictEqual('27 มิ.ย. 2562')
  })

  test('Should return corrent date and time in L format', () => {
    expect(moment('2019-06-27T02:15:07+07:00').format('L')).toStrictEqual('27/06/2562')
  })

  test('Should return correct date without time in L format', () => {
    expect(moment('2019-06-27').format('L')).toStrictEqual('27/06/2562')
  })

  test('Should return corrent date and time in l format', () => {
    expect(moment('2019-06-27T02:15:07+07:00').format('l')).toStrictEqual('27/6/2562')
  })

  test('Should return correct date without time in l format', () => {
    expect(moment('2019-06-27').format('l')).toStrictEqual('27/6/2562')
  })

  test('Should return corrent date and time in MM/DD/YYYY format', () => {
    expect(moment('2019-06-27T02:15:07+07:00').format('MM/DD/YYYY')).toStrictEqual('06/27/2562')
  })

  test('Should return correct date without time in MM/DD/YYYY format', () => {
    expect(moment('2019-06-27').format('MM/DD/YYYY')).toStrictEqual('06/27/2562')
  })

  test('Should return corrent date and time in MM/DD/YY format', () => {
    expect(moment('2019-06-27T02:15:07+07:00').format('MM/DD/YY')).toStrictEqual('06/27/62')
  })

  test('Should return correct date without time in MM/DD/YY format', () => {
    expect(moment('2019-06-27').format('MM/DD/YY')).toStrictEqual('06/27/62')
  })

  test('Should return corrent date and time in MM/DD/Y format', () => {
    expect(moment('2019-06-27T02:15:07+07:00').format('MM/DD/Y')).toStrictEqual('06/27/2562')
  })

  test('Should return correct date without time in MM/DD/Y format', () => {
    expect(moment('2019-06-27').format('MM/DD/Y')).toStrictEqual('06/27/2562')
  })

  test('Should return correct date without time in YYYY-MM-DDTHH:mm:ss.sssZ format', () => {
    expect(moment('2019-06-27T02:15:07+07:00').format('YYYY-MM-DDTHH:mm:ss.sssZ')).toStrictEqual('2562-06-27T02:15:07.077+07:00')
  })

  test('Should return corrent date and time in MM/DD/Y format and leap day', () => {
    expect(moment('2020-02-29T15:07+07:00').format('MM/DD/Y')).toStrictEqual('02/29/2563')
  })

  test('Should return correct date without time in MM/DD/Y format and leap day', () => {
    expect(moment('2020-02-29').format('MM/DD/Y')).toStrictEqual('02/29/2563')
  })

  test('Should return correct date without time in YYYY-MM-DDTHH:mm:ss.sssZ format and leap day', () => {
    expect(moment('2020-02-29T02:15:07+07:00').format('YYYY-MM-DDTHH:mm:ss.sssZ')).toStrictEqual('2563-02-29T02:15:07.077+07:00')
  })

  test('Should return correct date without time in YYYY-MM-DDTHH:mm:ss.sssZ format with option', () => {
    expect(moment('2020-02-29T02:15:07+07:00').format('YYYY-MM-DDTHH:mm:ss.sssZ', { be: false })).toStrictEqual('2020-02-29T02:15:07.077+07:00')
  })

  test('Should return correct date without time in YYYY-MM-DDTHH:mm:ss.sssZ format in Christian Era', () => {
    moment.buddhistEra(false)
    expect(moment('2020-02-29T02:15:07+07:00').format('YYYY-MM-DDTHH:mm:ss.sssZ')).toStrictEqual('2020-02-29T02:15:07.077+07:00')
  })
})
