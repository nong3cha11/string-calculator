import { add } from "./main";

describe('1', () => {
  it('should print 0 when empty string', () => {
    // given
    const num = '';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(0);
  });

  it('should print 25 when provide 25 in the string', () => {
    // given
    const num = '25';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(25);
  });

  it('should print 75 when provide 50,25 in the string', () => {
    // given
    const num = '50,25';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(75);
  });
});

describe('2', () => {
  it('should print 100 when provide 50,25,25 in the string', () => {
    // given
    const num = '50,25,25';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(100);
  });

  it('should print 14 when provide 2,3,4,5 in the string', () => {
    // given
    const num = '2,3,4,5';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(14);
  });

  it('should print 25 when provide 5,5,5,5,5 in the string', () => {
    // given
    const num = '5,5,5,5,5';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(25);
  });
});

describe('3', () => {
  it('should print 100 when provide 50\n25,25 in the string', () => {
    // given
    const num = '50\n25,25';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(100);
  });

  it('should print 14 when provide 2,3\n4,5 in the string', () => {
    // given
    const num = '2,3\n4,5';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(14);
  });

  it('should print 25 when provide 5,5,5,5\n5 in the string', () => {
    // given
    const num = '5,5,5,5\n5';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(25);
  });
});

describe('4', () => {
  it('should print 50 when provide //;\n25;25 in the string', () => {
    // given
    const num = '//;\n25;25';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(50);
  });

  it('should print 14 when provide //-\n2-3-4-5 in the string', () => {
    // given
    const num = '//-\n2-3-4-5';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(14);
  });

  it('should print 15 when provide //\n\n5\n5\n5 in the string', () => {
    // given
    const num = '//\n\n5\n5\n5';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(15);
  });
});

describe('5', () => {
  it('should print negatives not allowed when provide -5,5 in the string', () => {
    // given
    const num = '-5,5';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual('negatives not allowed');
  });

  it('should print negatives not allowed when provide 10,-10 in the string', () => {
    // given
    const num = '10,-10';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual('negatives not allowed');
  });

  it('should print negatives not allowed - -1,-1 when provide -1,-1 in the string', () => {
    // given
    const num = '-1,-1';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual('negatives not allowed - -1,-1');
  });
});

describe('6', () => {
  it('should print 5 when provide 5,1008 in the string', () => {
    // given
    const num = '5,1008';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(5);
  });

  it('should print 15 when provide 1005,15 in the string', () => {
    // given
    const num = '1005,15';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(15);
  });

  it('should print 1111 when provide 1000,111 in the string', () => {
    // given
    const num = '1000,111';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(1111);
  });
});

describe('7', () => {
  it('should print 6 when provide //[***]\n1***2***3 in the string', () => {
    // given
    const num = '//[***]\n1***2***3';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(6);
  });

  it('should print 20 when provide //[;;;]\n14;;;4;;;2 in the string', () => {
    // given
    const num = '//[;;;]\n14;;;4;;;2';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(20);
  });
});

describe('8', () => {
  it('should print 6 when provide //[*][%]\n1*2%3 in the string', () => {
    // given
    const num = '//[*][%]\n1*2%3';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(6);
  });

  it('should print 11 when provide //[,][;][-]\n3,2;1-5 in the string', () => {
    // given
    const num = '//[,][;][-]\n3,2;1-5';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(11);
  });

  it('should print 11 when provide //[,][.][*]\n3.2,1*5 in the string', () => {
    // given
    const num = '//[,][.][*]\n3.2,1*5';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(11);
  });
});

describe('9', () => {
  it('should print 6 when provide //[***][%%%]\n1***2%%%3 in the string', () => {
    // given
    const num = '//[***][%%%]\n1***2%%%3';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(6);
  });

  it('should print 11 when provide //[,,,][;;;][---]\n3,,,2;;;1---5 in the string', () => {
    // given
    const num = '//[,,,][;;;][---]\n3,,,2;;;1---5';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(11);
  });

  it('should print 11 when provide //[,,][...][****]\n3,,2...1****5 in the string', () => {
    // given
    const num = '//[,,][...][****]\n3...2,,1****5';

    // when
    const sum = add(num);

    // then
    expect(sum).toEqual(11);
  });
});