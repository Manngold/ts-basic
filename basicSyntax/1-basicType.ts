{
  //string, number, bigint, symbol, undefined, null - 원시타입

  // 변수를 선언하면서 타입을 명시할 수 있다.

  let str: string;
  str = 'manngold';

  let num: number;
  num = 1;

  // 해당 타입에 맞지 않는 값은 에러를 던진다
  // ex) num = '13'

  let foo: undefined;
  foo = undefined;

  let boo: null;
  boo = null;

  //unknown any - 뭐가 들어올지 잘 몰라, 뭐든 들어와도 돼

  let random: unknown;
  random = 1;
  random = 'name';

  let anything: any;
  anything = 1;
  anything = 'any';

  //void - 아무것도 리턴하지 않는다

  function voidFunc1(): void {
    console.log('hello world');
  }

  //void를 생략해도 암묵적으로 void라는 것이 적용됨
  function voidFunc2() {
    console.log('hello world');
    return; // 아무것도 리턴하지 않음
  }

  // never - '절대' 끝나지 않는다

  function neverFunc1(): never {
    //never를 리턴하는 함수는 엔드포인트가 존재하지 않는다
    //따라서 암묵적으로 void를 리턴하는 이 함수는 에러를 던지게 된다.
  }

  function neverFunc2(message: string): never {
    throw new Error(message); // 에러를 던지는 함수처럼 리턴이 없는 함수에서 사용할 수 있다.
    //혹은 무한루프
  }

  //object - 객체는 뭐든 가능

  function func1(obj: object) {
    console.log(obj);
  }

  func1([1, 2, 3]); // 배열 가능
  func1({ greet: 'hi' }); //obj 가능

  // union type : 이거일 수도 저거일 수도

  function mixing(fruit: string | null): string | undefined {
    if (fruit) return `${fruit} juice`;
    else return undefined;
  }
  console.log(mixing('tomato')); //tomato juice
  console.log(mixing(null)); //undefined
}
