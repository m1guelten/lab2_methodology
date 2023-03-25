const LinkedList = require('./index');

function init() {
  const list = new LinkedList();

  list.append('a');
  list.append('b');
  list.append('c');
  list.append('d');

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
    list.append('x');
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('b');
    expect(list.get(2)).toBe('c');
    expect(list.get(3)).toBe('d');
    expect(list.get(4)).toBe('x');
  });

  test('Delete', () => {
    let list = init();
    list.delete(2);
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('b');
    expect(list.get(2)).toBe('d');
  });

  test('Delete error', () => {
    let list = init();
    expect(list.delete(5)).toBe(null);
    expect(list.delete(-5)).toBe(null);
  });

  test('DeleteAll middle', () => {
    let list = init();
    list.append('b');
    list.append('e');
    list.deleteAll('b');
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('c');
    expect(list.get(2)).toBe('d');
    expect(list.get(3)).toBe('e');
  });

  test('DeleteAll error', () => {
    let list = init();
    expect(list.deleteAll('f')).toBe(null);
    expect(list.deleteAll(-5)).toBe(null);
  });

  test('Reverse', () => {
    let list = init();
    list.reverse();
    expect(list.get(0)).toBe('d');
    expect(list.get(1)).toBe('c');
    expect(list.get(2)).toBe('b');
    expect(list.get(3)).toBe('a');
  });

  test('Clear', () => {
    let list = init();
    list.clear();
    expect(list.length()).toBe(0);
  });

  test('FindFirst', () => {
    let list = init();
    list.append('b');
    list.append('e');
    expect(list.findFirst('b')).toBe(1);
    expect(list.findFirst('r')).toBe(-1);
  });

  test('FindLast', () => {
    let list = init();
    list.append('b');
    list.append('e');
    expect(list.findLast('b')).toBe(4);
    expect(list.findLast('r')).toBe(-1);
  });

  test('Insert', () => {
    let list = init();
    list.insert('e', 2);
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('b');
    expect(list.get(2)).toBe('e');
    expect(list.get(3)).toBe('c');
    expect(list.get(4)).toBe('d');
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

  test('Clone', () => {
    let list = init();
    let cloneList = list.clone();
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('b');
    expect(list.get(2)).toBe('c');
    expect(list.get(3)).toBe('d');
    expect(cloneList.get(0)).toBe('a');
    expect(cloneList.get(1)).toBe('b');
    expect(cloneList.get(2)).toBe('c');
    expect(cloneList.get(3)).toBe('d');
    list.append('w');
    expect(cloneList.get(2)).toBe('c');
    expect(cloneList.get(3)).toBe('d');
    expect(cloneList.get(4)).toBe(null);
  });

  test('Extend', () => {
    let list = init();
    let list2 = init();
    list.extend(list2);
    expect(list.get(0)).toBe('a');
    expect(list.get(1)).toBe('b');
    expect(list.get(2)).toBe('c');
    expect(list.get(3)).toBe('d');
    expect(list.get(4)).toBe('a');
    expect(list.get(5)).toBe('b');
    expect(list.get(6)).toBe('c');
    expect(list.get(7)).toBe('d');
    list2.append('f');
    expect(list.get(5)).toBe('b');
    expect(list.get(6)).toBe('c');
    expect(list.get(7)).toBe('d');
    expect(list.get(8)).toBe(null);
  });
});
