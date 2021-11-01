const initialState = {
  counter : [
      {
          counterNum : 0,
          counterName: 'None',
      },
  ],
};

const counter = (state = initialState, action) => {
  const {counter} = state;

  switch(action.type) {
      case 'INCREMENT' :
          return({
              counter : [
                  ...counter.slice(0, action.index),
                  {
                      counterNum : counter[action.index].counterNum + 1,
                      counterName : counter[action.index].counterName
                  },
                  ...counter.slice(action.index+1, counter.length),
              ]
          });
      case 'DECREMENT' :
          return ({
              counter : [
                  ...counter.slice(0, action.index),
                  {
                      counterNum : counter[action.index].counterNum - 1,
                      counterName : counter[action.index].counterName
                  },
                  ...counter.slice(action.index+1, counter.length)
              ]
          });
      case 'ADD' :
          return ({
              counter : [
                  ...counter,
                  {
                      counterNum : 0,
                      counterName : action.content
                  },
              ]
          });
      case 'REMOVE' :
          return ({
              counter : counter.slice(0, counter.length-1)
          });

      default :
          return state;
  }
}

export default counter;