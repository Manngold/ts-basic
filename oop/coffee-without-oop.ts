{
  type CoffeeCup = {
    shot: number;
    isLatte: boolean;
  };
  const BEANS_FOR_ONE_SHOT: number = 7;

  let beans: number = 0;

  const makeCoffee = (shot: number, bean: number): CoffeeCup => {
    if (beans < shot * BEANS_FOR_ONE_SHOT) {
      throw new Error('Not enough coffee beans');
    } else {
      beans -= shot * BEANS_FOR_ONE_SHOT;
      return {
        shot,
        isLatte: false,
      };
    }
  };
  beans += 14;
  const twoShotCoffee = makeCoffee(2, beans);
  console.log(twoShotCoffee);
}
