import Swal from "sweetalert2";
import { EditTodo } from "../../redux/state/todo/todoSlice";
import store from "../../redux/store/store";

export function TodoEditAlert(item, index) {
  Swal.fire({
    title: "Update Todo",
    input: "text",
    inputValue: item,
    inputValidator: (value) => {
      store.dispatch(EditTodo({ task: value, index: index }));
    },
  });
}
