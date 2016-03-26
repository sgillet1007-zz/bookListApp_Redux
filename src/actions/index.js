export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action, an object with a type property.
  return {
    type: 'BOOK_SELECTED', // required - can be string or variable
    payload: book // optional
  };
}
