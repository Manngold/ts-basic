{
  //enum은 여러 상수를 담을 수 있는 표현 방식
  enum ComputerScience {
    OS,
    DataStructure,
    Network,
    Algorithm,
  }

  let network = ComputerScience.Network;
  console.log(network); // 2 자동적으로 인덱스를 먹인다
  network = 10; // error를 던지지 않음

  enum Energy {
    Solar = 'solar',
    Wind = 'wind',
    Wave = 'wave',
    nuclear = 'nuclear',
  }
  let solarEnergy = Energy.Solar;
  console.log(solarEnergy);
  // string을 할당할 수 있지만 union을 통한 타입 정의가 명확하다
}
