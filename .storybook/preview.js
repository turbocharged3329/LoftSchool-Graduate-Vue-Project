export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'standart',
        value: '#CC6633',
      },
      {
        name: 'gray',
        value: '#666666'
      }
    ]
  }
}