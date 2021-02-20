{
  // 기존 js문법에서 ts문법 활용을 통해 clear한 함수 선언

  // parameter와 return 타입을 명시하면서 함수를 선언함으로 어떤 함수인지 명확하게 알 수 있음
  // ex) adder라는 함수는 두 숫자를 받아서 숫자를 리턴하는구나~ 라는 생각을 가질 수 있음

  //javascript

  const addNickname = (nickname, name) => {
    return nickname + name;
  };
  console.log(addNickname('coder', 'manngold'));

  //typescript

  const adder = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  console.log(adder(1, 2));

  // optional를 통한 선택적 인자값 명시
  // 옵션값 유무에 따른 상황 처리를 해줄 때, optional(?) 표시를 활용할 수 있다.

  const orderProduct = (product: string, option?: string): string => {
    if (!option) {
      return `Order ${product}`;
    } else {
      return `Order ${product} option - ${option} `;
    }
  };

  console.log(orderProduct('Nike shoes', '270mm'));
  console.log(orderProduct('Nike cap'));

  // default를 통한 parameter의 기본값 설정

  const greetingMsg = (msg: string = 'Welcome!') => {
    console.log(msg);
  };

  const spreadNum = (...nums: number[]): number => {
    let result = 0;
    for (const i of nums) {
      result += i;
    }
    return result;
  };

  console.log(spreadNum(1, 2, 3, 4, 5));

  //promise

  const fetchData1 = (url: string, option: object): Promise<string> => {
    return new Promise((resolve, reject) => {
      resolve('Fetch Data!');
    });
  };

  //readOnly
  //parameter 값을 변경 할 수 없게 묶어둘 수 있음 배열의 불변성 보장

  const readData = (data: readonly string[]): string[] => {
    data.map((a) => (a += '1'));
    return data;
  };
}
