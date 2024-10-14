// import React ,{ useState } from 'react'
// import {useStateContext} from "../contexts/ContextProvider"

// import { MdDelete } from "react-icons/md";
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// import { kanbanData } from '../data/dummy'; 

  


// const addNewElementToKanban = ({info1,info2,info3,info4,info5,info6,info7,info8,info9,info10,info11}) => {
//     const { showFormToAddUser,setShowFormToAddUser } = useStateContext();

//     // states to manage input value
//     const [users, setUsers] = useState(kanbanData);
//     const [prop1, setProp1] = useState("");
//     const [prop2, setProp2] = useState("");
//     const [prop3, setProp3] = useState("");
//     const [prop4, setProp4] = useState("");
//     const [prop5, setProp5] = useState("");
//     const [prop6, setProp6] = useState("");
//     const [prop7, setProp7] = useState("");
//     const [prop8, setProp8] = useState("");
//     const [prop9, setProp9] = useState("");
//     const [prop10, setProp10] = useState("");
//     const [prop11, setProp11] = useState("");
    
    
//     // Convert the image to a base64 string: This is necessary to store the image data in the array.
//     // const handlePhotoChange = (event) => {
//     //   const file = event.target.files[0];
//     //   const reader = new FileReader();
  
//     //   reader.onloadend = () => {
//     //     setPhoto(reader.result);   
  
//     //   };
  
//     //   reader.readAsDataURL(file);
//     // };
//     const closeOpenForm = () => {
//       setShowFormToAddUser(!showFormToAddUser)
//     }
//     const handleSubmit = () => {
//       setShowFormToAddUser(!showFormToAddUser)
//       // e.preventDefault();
//       // Add new customer data to context
//       const newUser = {
//           Id:prop1,
//           Title:prop2,
//           Status:prop3,
//           Summary:prop4,
//           Type:prop5,
//           Priority:prop6,
//           Tags:prop7,
//           Estimate:prop8,
//           Assignee:prop9,
//           RankId:prop10,
//           Color:prop11,
//           ClassName:"'e-story, e-low, e-nancy-davloio'",
//       }
//       setUsers(users.unshift(newUser));
  
//       setProp1("")
//       setProp2("")
//       setProp3("")
//       setProp4("")
//       setProp5("")
//       setProp6("")
//       setProp7("")
//       setProp8("")
//       setProp9("")
//       setProp10("")
//       setProp11("")
//       // setPhoto(null);
//       console.log(users);
      
      
      
//     }
//   // states to mange erros
    
//   // states to change colors after validation
//   return (
//     <div className={`absolute inset-0 bg-black/70  items-center justify-center z-10 ${showFormToAddUser ? 'hidden' : 'flex '}`}>


//   <div className="bg-white rounded-lg border text-card-foreground shadow-sm w-full max-w-md bg-background relative pt-5" data-v0-t="card">
//   <div className="absolute -top-3 right-2     mt-4 " >
//   <TooltipComponent content="Close This Tap if You Don't Want to delete the user" onClick={closeOpenForm} >
//   <MdDelete className="h-8 w-8 text-red-700" />
//     </TooltipComponent>
// </div>
//     <div className="flex flex-col space-y-1.5 p-6">
//       <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Customer Information</h3>
//       <p className="text-sm text-muted-foreground">Please fill out the form to add a new customer.</p>
//     </div>
//     <div className="p-6 grid gap-4">
//       <div className="grid grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <label
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             htmlFor="prop1"
//           >
//             {info1}
//           </label>
//           <input
//             className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//             id="prop1"
//             type="number"
//             placeholder="Name"
            
//             value={prop1}
//             onChange={(e) => setProp1(e.target.value)}
//           />
          
//         </div>
//         <div className="space-y-2">
//           <label
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             htmlFor="prop2"
//           >
//             {info2}
//           </label>
//           <input
//             className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//             id="prop2"
//             type="text"
//             placeholder="Name"
            
//             value={prop2}
//             onChange={(e) => setProp2(e.target.value)}
//           />
          
//         </div>
//         <div className="space-y-2">
//           <label
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             htmlFor="prop3"
//           >
//             {info3}
//           </label>
//           <input
//             className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//             id="prop3"
//             type="number"
//             placeholder="Name"
            
//             value={prop3}
//             onChange={(e) => setProp3(e.target.value)}
//           />
          
//         </div>
//         <div className="space-y-2">
//           <label
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             htmlFor="prop4"
//           >
//             {info4}
//           </label>
//           <input
//             className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//             id="prop4"
//             type="text"
//             placeholder="Name"
            
//             value={prop4}
//             onChange={(e) => setProp4(e.target.value)}
//           />
          
//         </div>
//         <div className="space-y-2">
//           <label
//             className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//             htmlFor="prop5"
//           >
//             {info5}
//           </label>
//           <input
//             className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//             id="prop5"
//             placeholder="Enter customer age"
//             type="text"
            
            
            
//             value={prop5}
//             onChange={(e) => setProp5(e.target.value)}
//           />
          
//         </div>
//       </div>
      
//       <div className="space-y-2">
//         <label
//           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           htmlFor="prop6"
//         >
//           {info6}
//         </label>
//         <input
//           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//           id="prop6"
//           type="text"
//             placeholder="text"
            
//             value={prop6}
//             onChange={(e) => setProp6(e.target.value)}
//           />
          
//       </div>
//       <div className="space-y-2">
//         <label
//           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           htmlFor="prop7"
//         >
//           {info7}
//         </label>
//         <input
//           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//           id="prop7"
//           type="text"
//             placeholder="text"
            
//             value={prop7}
//             onChange={(e) => setProp7(e.target.value)}
//           />
          
//       </div>
//       <div className="space-y-2">
//         <label
//           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           htmlFor="prop8"
//         >
//           {info8}
//         </label>
//         <input
//           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//           id="prop8"
//           type="text"
//             placeholder="text"
            
//             value={prop8}
//             onChange={(e) => setProp8(e.target.value)}
//           />
          
//       </div>
//       <div className="space-y-2">
//         <label
//           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           htmlFor="prop9"
//         >
//           {info9}
//         </label>
//         <input
//           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//           id="prop9"
//           type="text"
//             placeholder="text"
            
//             value={prop9}
//             onChange={(e) => setProp9(e.target.value)}
//           />
          
//       </div>
//       <div className="space-y-2">
//         <label
//           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           htmlFor="prop10"
//         >
//           {info10}
//         </label>
//         <input
//           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//           id="prop10"
//           type="text"
//             placeholder="text"
            
//             value={prop10}
//             onChange={(e) => setProp10(e.target.value)}
//           />
          
//       </div>
//       <div className="space-y-2">
//         <label
//           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//           htmlFor="prop11"
//         >
//           {info11}
//         </label>
//         <input
//           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//           id="prop11"
//           type="text"
//             placeholder="text"
            
//             value={prop11}
//             onChange={(e) => setProp11(e.target.value)}
//           />
          
//       </div>
      
//     </div>
//     <div className="items-center p-6 flex justify-end"  >
//       <button   className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2" onClick={handleSubmit} >
//         Save
//       </button >
//     </div>
//   </div>
// </div>
//   )
// }

// export default addNewElementToKanban



  
  
  
