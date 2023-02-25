 export async function loadFonts () {
  const webFontLoader = await import('webfontloader')

  webFontLoader.load({
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap', 'Open Sans Condensed:300,700'],
    },
  })
}
