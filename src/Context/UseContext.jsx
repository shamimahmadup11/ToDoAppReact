/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [contextState, setContextState] = useState({
    images: [
      "https://media.istockphoto.com/id/1487710789/photo/student-paying-attention-during-class-in-the-university.jpg?s=1024x1024&w=is&k=20&c=H57IASttjLlaIcbyxebiPO5PzYCDb8_hTd8VRZ2RXUQ=",
      "https://media.istockphoto.com/id/1326278040/photo/group-of-people-doing-a-business-meeting.jpg?s=1024x1024&w=is&k=20&c=hjp0DWk4i4qWzHUzSjJYALuAjONL5SfP5t2PpvhiJnI=",
      "https://media.istockphoto.com/id/1191969898/photo/colleagues-having-a-discussion-in-the-office.jpg?s=1024x1024&w=is&k=20&c=pnW0m91NKtWi8uVVxxElXn6duMrDY60FiytdUpwURUE="
    ],
    auth: [
      {
        name: "ShamimAhmad",
        email:"shamimahmadup1@mail.com",
        id: 1,
  
      },
    ]
    
  });
 

  return (
    <MyContext.Provider value={{ contextState, setContextState}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, ContextProvider };
