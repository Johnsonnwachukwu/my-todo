
























































































































// import React, { useState } from 'react';

// function TodoList() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim() !== '') {
//       const newTodo = {
//         id: Date.now(),
//         text: inputValue.trim()
//       };
//       setTodos([...todos, newTodo]);
//       setInputValue('');
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSubmit(e);
//     }
//   };

//   const handleDelete = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-gray-500 rounded-lg shadow-md">
//       <h1 className="text-3xl text-center mb-4">Todo List</h1>
//       <form onSubmit={handleSubmit} className="flex mb-4">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleChange}
//           onKeyPress={handleKeyPress}
//           placeholder="Add new todo"
//           className="flex-1 px-4 py-2 rounded-l-md  text-black focus:outline-none focus:ring focus:border-blue-300"
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-500 text-black  rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//         >
//           Add
//         </button>
//       </form>
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id} className="flex items-center justify-between px-4 py-2 bg-black mb-2 rounded-md shadow-sm">
//             <span>{todo.text}</span>
//             <button
//               onClick={() => handleDelete(todo.id)}
//               className="text-red-500 hover:text-red-600 focus:outline-none focus:ring focus:border-blue-300"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;
