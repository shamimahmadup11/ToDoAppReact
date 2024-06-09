import { useState } from "react";


const Form = () => {
    const[data, setData]=useState([{
        name:"Abc",
        branch: "cse",
        gender: "male"

    },
    {
        name:"Abc",
        branch: "cse",
        gender: "male"

    },
    {
        name:"Abc",
        branch: "cse",
        gender: "male"

    }
]);

    function HandlinForm(e){
          e.preventDefault();
        let formData=new FormData(e.target);
        let formObj= Object.fromEntries(formData.entries())
        console.log(formObj)
        setData([ ...data , formObj])
    }  // this method use for the peek the data from the Form in json farmate 


    return (
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Add Student here</h1>
        <form className="space-y-4" onSubmit={HandlinForm}>
          <div>
            <input type="text" placeholder="Add Name" name="name" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
          </div>
  
          <div>
            <input type="text" placeholder="Add Branch" name="branch" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
          </div>
  
          <div>
            <label className="block mb-2">Gender</label>
            <div className="flex items-center space-x-4">
              <input type="radio" name="gender" value="male" className="form-radio text-blue-500 focus:ring-blue-500" />
              <span className="text-sm">Male</span>
              <input type="radio" name="gender" value="female" className="form-radio text-blue-500 focus:ring-blue-500" />
              <span className="text-sm">Female</span>
            </div>
          </div>
  
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
          </div>
          {JSON.stringify(data)}
        </form>

      
      </div>
    )
  }
  
  export default Form;
  