/**
 * Initializes the data structures.
 *
 * Since some objects depends on others,
 * the order is very important.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
setup.init = (setup => () => {
  console.log('Initializing setup', setup)
})(setup)
