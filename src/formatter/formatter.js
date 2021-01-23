import numeral from 'numeral'

numeral.defaultFormat('0.0,0')

numeral.register('locale', 'cl', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
})

numeral.locale('cl')

const formatToNumber = number => {
    return numeral(number).format('0,0')
}

export {
    formatToNumber,
  }
  