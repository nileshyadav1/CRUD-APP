<template>
  <div class="users">
    <div class="user-table">
      <div class="title">
        <h1>Users</h1>
        <button>Add User</button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>Nilesh</span></td>
              <td><span>Yadav</span></td>
              <td><p class="email"> nilesh.yadav.dev@gmail.com</p></td>
              <td>
                <p class="contact">8000968035</p>
              </td>
              <td ><p class="status"> Active </p></td>
              <td >
                <div class="action">
                <button id="edit">Edit</button>
                <button id="delete">Delete</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><span>Nilesh</span></td>
              <td><span>Yadav</span></td>
              <td><p class="email"> nilesh.yadav.dev@gmail.com</p></td>
              <td>
                <p class="contact">8000968035</p>
              </td>
              <td ><p class="status"> Active </p></td>
              <td >
                <div class="action">
                <button id="edit">Edit</button>
                <button id="delete">Delete</button>
                </div>
              </td>
            </tr>
            
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Users",
};
</script>

<style scoped>
.users {
  width: 90%;
  height: 100%;
  padding: 1% 5%;
  overflow-x: hidden;
}

.user-table {
  min-height: 800px;
  background-color: #ffffff;
  margin: 0 auto;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #d8dbe0;
  margin-bottom:30px;
}

.title button {
  border: none;
  border-radius: 20px;
  padding: 6px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: #3399ff;
}


table {
  width: 100%;
  height: 100%;
  min-height: 100%;
  border-collapse: collapse;
  box-shadow: 0 5px 10px #e1e5ee;
  background-color: white;
  text-align: left;
  overflow: hidden;

}

thead {
    box-shadow: 0 5px 10px #e1e5ee;
  }

  th {
    padding: 1rem 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 0.7rem;
    font-weight: 900;
  }
   tr:nth-child(even) {
    background-color:#f4f6fb;
  }

  td {
    padding: 1rem 2rem;
  }

  td span{
    text-transform: capitalize;
  }
  

  .status{
    border-radius: 10px;
    background-color: #c8e6c9;
    color: #ffffff;
    padding: 5px 8px;
    text-align: center;
  }
  
  .action{
    
    display:flex;
    justify-content: space-evenly;
    padding: 15px 0;
  }

  .action button{
    border: none;
  border-radius: 20px;
  padding: 8px 10px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
 
  }
  .action button#edit{
   
   background-color: #3399ff;
   color:#ffffff;
  }
  .action button#delete{
   background-color: #c62828;
   color:#ffffff;
 
  }


</style>
