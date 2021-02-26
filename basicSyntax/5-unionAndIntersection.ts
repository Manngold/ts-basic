{
  // union은 타입을 정의 할 때, 여러 타입을 지정함으로서 타입을 활용도를 높일 수 있다.
  // 타입스크립트가 여러 타입이 존재하는 것에 대한 혼란을 막기 위한 것인데 왜 이게 활용도를 높이는 방향인가?

  // 한정적인 값에 대해서 string literal을 활용할 수 있다.

  type orderStatus = 'wait' | 'order' | 'cancel';

  const printOrderStatus = (status: orderStatus) => {
    console.log(status);
  };

  //union type을 통한 user verify 함수의 구체화
  type Success = {
    token: string;
  };
  type Fail = {
    errorCode: number;
    errorMsg: string;
  };
  type VerifyResult = Success | Fail;

  const verifyUser = (id: number): VerifyResult => {
    // ...verify logic
    //success
    if (isSuccess) {
      return { token: 'user token' };
    }
    //fail
    else {
      return {
        errorCode: 400,
        errorMsg: 'not vaild user id or password',
      };
    }
  };

  // intersection은 type alias를 통해 생성된 여러 타입을 하나로 합쳐서 사용 할 수 있다.
  // musicPlayer와 phone이라는 type을 합쳐서 smartPhone을 만들 수 있다.

  type MusicPlayer = {
    playMusic: () => string;
  };

  type Phone = {
    phoneNum: string;
    call: () => string;
    alarm: () => void;
  };

  type SmartPhone = MusicPlayer & Phone;

  const myPhone: SmartPhone = {
    phoneNum: '010-1234-5678',
    playMusic: () => 'play music',
    call: () => 'DDU RURU',
    alarm: () => console.log('ring ring'),
  };

  const handleSmartPhone = (smartPhone: SmartPhone) => {
    console.log(smartPhone.playMusic(), smartPhone.call(), smartPhone.phoneNum);
    smartPhone.alarm();
  };

  handleSmartPhone(myPhone);
}
