export default function (state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          title: action.payload,
          completed: false,
        },
      ];

    case "remove":
      return state.filter((element) => element.title !== action.payload);

    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return state.count > 1 ? { count: state.count - 1 } : state;

    case "done":
      return state.map((element) => {
        if (element.color == action.payload) {
          element.completed = !element.completed;
        }
        return element;
      });
    case "reset":
      return state.map((element) => {
        if (element.completed == false) {
        } else {
          element.completed = false;
        }
        return element;
      });
    default:
      return state;
  }
}
