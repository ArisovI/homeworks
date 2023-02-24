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

    case "addSettings":
      return {
        cars: {
          ...state.cars,
          price: [+[...state.cars.price] + +action.payload.price],
          ...state.cars.features.push(action.payload),
        },
        features: [...state.features.filter((el) => el != action.payload)],
      };

    case "delSettings":
      return {
        cars: {
          ...state.cars,
          price: [[...state.cars.price] - action.payload.price],
          features: state.cars.features.filter((el) => el != action.payload),
        },
        features: [...state.features, action.payload],
      };
    default:
      return state;
  }
}
