import React from "react";
import './form.css';
function UserForm() {
  return (
    <div className="form">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get">
          <label for="fistname">First Name</label>
          <input type="text" name="firstname" id="firstname" placeholder="Enter First Name"  required/>
          <br/><br/>
          
          <label for="lastname">Last Name</label>
          <input type="text" name="lastname" id="lastname" placeholder="Enter Last Name"  required/>
          <br/><br/>

          <label for="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Enter Email"  required/>
          <br/><br/>

          <label for="tel">Contact</label>
          <input type="tel" name="tel" id="tel" placeholder="Enter Mobile Number"  required/>
          <br/><br/>
       <label for="gender">Gender</label>
       <br/>
       <input type="radio" name="gender" id="male" value=""/>Male
       <input type="radio" name="gender" id="female" value=""/>Female
       <input type="radio" name="gender" id="other" value=""/>Other

       <br/><br/>

       <label for="lang">Subjects</label>
       <br/>
       <input type="checkbox" name="lang" id="english"  />
       English
       <input type="checkbox" name="lang" id="math" />
       Math

       <input type="checkbox" name="lang" id="physics" />
       Physics

       <br/><br/>

       <label for="file">Upload Resume</label>
       <input type="file" name="file" id="file" placeholder="Enter Upload File" required/>

       <br/><br/>

       <label for="url">Enter URL</label>
       <input type="url" name="url" id="url" placeholder="Enter url" required />

   <br/><br/>
   <label>Select your choice</label>
   <select name="select" id="select">
    <option value="" disabled selected>
        Select your Ans
    </option>
    <optgroup label="Advanced">
        <option value="1">HTML</option>
        <option value="2">CSS</option>
        <option value="3">JavaScript</option>
      

    </optgroup>
    <optgroup label="Advanced">
        <option value="1">React</option>
        <option value="2">Node</option>
        <option value="3">Express</option>
        <option value="3">MongoDB</option>
      

    </optgroup>
   </select>
   <br/><br/>
   <label for="about">About</label>
   <br/>
   <textarea name="about" id="about" cols="70" rows="10" placeholder="About your self" required></textarea>
   <br/><br/>
   <label>Submit OR Reset</label>
   <br/>
   <button type="reset" value="reset">
    Reset
   </button>
   <button type="submit" value="Submit">Submit</button>



        </form>
        
      </fieldset>
    </div>
  );
}

export default UserForm;
