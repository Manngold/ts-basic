{
  // type assertion : ~ 타입이라고 확신하고 로직을 수행하도록 강제

  const name: any = 1;
  const nameLength: number = (name as string).length; // type assertion을 통해 name변수가 string이라고 확신
  console.log(nameLength); // string이 아닌 num을 받았기에 undefined를 출력함

  const studentList: any = 'this is not arr';
  const addNewStudentList = (studentList as string[]).push('new student');
  console.log(addNewStudentList); //에러 발생

  type List = string[] | undefined;

  const addList: List = undefined;

  addList!.push('1'); // !를 통한 type assertion

  //type assertion은 해당 타입이 들어올 것이라는 보장이 되어 있을 때, 사용해야 되지만 만에 하나 예외의 경우가 발생하여 다른 타입이 들어올 경우 런타임 환경에서 에러가 발생할 수 있는 치명적인 단점이 있다.
}
