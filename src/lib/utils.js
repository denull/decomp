export function itemValue(/** @type String | { value: String } */ item) {
  return typeof item === 'string' ? item : item.value;
}

export function itemTitle(/** @type String | { title: String } */ item) {
  return typeof item === 'string' ? item : item.title;
}