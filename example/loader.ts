type Loading = {
  state: 'loading';
};

type Success = {
  state: 'success';
  response: {
    body: string;
  };
};

type Fail = {
  state: 'fail';
  reason: string;
};

type LoadState = Loading | Success | Fail;

const printState = (loadState: LoadState): string => {
  let returnMsg = '';
  switch (loadState.state) {
    case 'loading':
      returnMsg = '👀 loading...';
      break;
    case 'success':
      returnMsg = `😀 loaded response : ${loadState.response.body}`;
      break;
    case 'fail':
      returnMsg = `😢 load fail reason : ${loadState.reason}`;
      break;
    default:
      throw new Error('Throw Exception Error');
  }
  return returnMsg;
};

console.log(printState({ state: 'loading' }));
console.log(
  printState({ state: 'success', response: { body: 'success load' } })
);
console.log(printState({ state: 'fail', reason: 'network error' }));
