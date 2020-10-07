export function add(numbers: string) {
  let split: string[] = [];
  if (numbers.includes('//')) {
    const items: string[] | undefined = numbers
      .match(/(?<=\/\/)(.*?)(?=\n)/g)
      ?.join('')
      .split('[')
      .join('')
      .split(']') || [''];
    const number_list = numbers.split('\n');
    let only_number = number_list[number_list.length - 1];
    items.forEach((item) => {
      only_number = only_number.split(item).join(',');
    });
    split = only_number.split(',');
  } else {
    split = numbers.replace('\n', ',').split(',');
  }

  let value = 0;
  let error_number = [];
  for (let i = 0; i < split.length; i++) {
    const current_number = +split[i];
    if (current_number <= 1000) {
      value += +split[i] | 0;
    }
    if (current_number < 0) {
      error_number.push(current_number);
    }
  }
  if (error_number.length > 0) {
    throw new Error('negatives not allowed ' + error_number.join(','));
  }
  return value;
}
