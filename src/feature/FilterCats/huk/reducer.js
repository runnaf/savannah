export default function reducer(state, action) {
    switch (action,type) {
        case DECREMENT:
            return {
                counter: state.counter - action.payload,
            };
        case INCREMENT:
            return {
                counter: state.counter + action.payload,
            };
        case RESET: 
            return {
                counter: 0
            }
    }
}