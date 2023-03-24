const LinkedList = require('./index');

function init() {
  const list = new LinkedList();

  list.append('a').append('b').append('c').append('d');

  return list;
}

describe('Linked List', () => {
  test('length', () => {
    let list = init();

    expect(list.length().toString()).toBe('4');
    list.append('x');
    expect(list.length().toString()).toBe('5');
  });

  test('length of empty list', () => {
    const list = new LinkedList();

    expect(list.length().toString()).toBe('0');
  });

  test('Append', () => {
    let list = init();

    expect(list.append('x').toString()).toBe('a,b,c,d,x');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('x');
  });

  test('Append is empty list', () => {
    const list = new LinkedList();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);

    expect(list.append('a').toString()).toBe('a');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('a');
  });
});
