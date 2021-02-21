{
  // type alias
  // type alias를 통한 타입 설정

  type name = string;
  type age = number;

  const manngold: name = 'manngold';
  const age: age = 28;

  type movieData = {
    id: number;
    title: string;
    genre: string[];
    rate: number;
  };

  const movieData = {
    id: 1,
    title: 'Iron man',
    genre: ['hero', 'action'],
    rate: 4.5,
  };

  //string literal
  //타입 대신 문자열을 지정하면 해당 문자열만 사용 가능

  type nickName = 'manngold';

  const nickName: nickName = 'manngold';
}
