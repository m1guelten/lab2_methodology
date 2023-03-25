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

  test('Delete head', () => {
    let list = init();
    expect(list.delete(0).toString()).toBe('a');
    expect(list.toString()).toBe('b,c,d');
    expect(list.head.value).toBe('b');
    expect(list.tail.value).toBe('d');
  });

  test('Delete tail', () => {
    let list = init();
    expect(list.delete(3).toString()).toBe('d');
    expect(list.toString()).toBe('a,b,c');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('c');
  });

  test('Delete middle', () => {
    let list = init();
    expect(list.delete(1).toString()).toBe('b');
    expect(list.toString()).toBe('a,c,d');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('d');
  });

  test('Delete error', () => {
    let list = init();
    expect(list.delete(5)).toBe(null);
    expect(list.delete(-5)).toBe(null);
  });

  test('DeleteAll head', () => {
    let list = init();
    expect(list.deleteAll('a').toString()).toBe('a');
    expect(list.toString()).toBe('b,c,d');
    expect(list.head.value).toBe('b');
    expect(list.tail.value).toBe('d');
  });

  test('DeleteAll tail', () => {
    let list = init();
    expect(list.deleteAll('d').toString()).toBe('d');
    expect(list.toString()).toBe('a,b,c');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('c');
  });

  test('DeleteAll middle', () => {
    let list = init();
    list.append('b').append('e');
    expect(list.toString()).toBe('a,b,c,d,b,e');
    expect(list.deleteAll('b').toString()).toBe('b');
    expect(list.toString()).toBe('a,c,d,e');

    expect(list.deleteAll('c').toString()).toBe('c');
    expect(list.toString()).toBe('a,d,e');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('e');
  });

  test('DeleteAll error', () => {
    let list = init();
    expect(list.deleteAll('f')).toBe(null);
    expect(list.deleteAll(-5)).toBe(null);
  });

  test('Reverse', () => {
    let list = init();
    expect(list.reverse().toString()).toBe('d,c,b,a');
  });

  test('Clear', () => {
    let list = init();
    list.clear();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test('FindFirst', () => {
    let list = init();
    list.append('b').append('e');
    expect(list.toString()).toBe('a,b,c,d,b,e');
    expect(list.findFirst('b')).toBe(1);
    expect(list.findFirst('r')).toBe(-1);
  });

  test('FindLast', () => {
    let list = init();
    list.append('b').append('e');
    expect(list.toString()).toBe('a,b,c,d,b,e');
    expect(list.findLast('b')).toBe(4);
    expect(list.findLast('r')).toBe(-1);
  });

  test('Insert', () => {
    let list = init();
    expect(list.insert('e', 2).toString()).toBe('a,b,e,c,d');
    expect(list.insert('f', 0).toString()).toBe('f,a,b,e,c,d');
    expect(list.insert('q', 6).toString()).toBe('f,a,b,e,c,d,q');
    expect(list.insert('h', 9)).toBe(null);
    expect(list.insert('w', -6)).toBe(null);
  });

  test('Get', () => {
    let list = init();
    expect(list.get(0).toString()).toBe('a');
    expect(list.get(1).toString()).toBe('b');
    expect(list.get(3).toString()).toBe('d');
    expect(list.get(-3)).toBe(null);
    expect(list.get(19)).toBe(null);
  });
});
