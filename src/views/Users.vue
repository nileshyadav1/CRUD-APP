<template>
  <div class="users">
    <div class="user-table">
      <div class="title">
        <h1>Users</h1>
        <button @click="AddUserModel=true">Add User</button>
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
            <tr v-for="user in users" :key="user.id">
              <td><span>{{user.fname}}</span></td>
              <td><span>{{user.lname}}</span></td>
              <td><p class="email">{{user.email}}</p></td>
              <td>
                <p class="contact">{{user.phone}}</p>
              </td>
              <td >
                <p v-if="user.status === 'active'" class="status active">Active</p>
                <p v-else class="status disabled">Disabled </p></td>
              <td >
                <div class="action">
                <button id="edit"  @click="routeTo(user.id)">Edit</button>
                <button id="delete" @click="deleteUser(user.id)">Delete</button>
                </div>
              </td>
            </tr>
          
            
            
          </tbody>
        </table>

      
      </div>

        <!-- Add user Modal Template -->
       <div v-if="AddUserModel">
    <transition name="model">
     <div class="modal-mask">
      <div class="modal-wrapper">
       <div class="add-user-modal-dialog">
        <div class="modal-content">
         <div class="modal-header">
          <p>Add User</p>
          <button class="btn" style="background-color: #3c4b64; color:#ffffff" @click="CloseAddUser">Close</button>
         </div>

         <div class="form-content">
          <form >
            <div class="input-div">
              <div class="input ">
                <label>Name</label>
                <input required type="text" v-model="addUser.fname" />
              </div>
              <div class="input ">
                <label>Last Name</label>
                <input required type="text"  v-model="addUser.lname"/>
              </div>
            </div>
             <div class="input-div">
              <div class="input ">
                <label>Email</label>
                <input required type="text" v-model="addUser.email"/>
              </div>
              <div class="input ">
                <label>Contact</label>
                <input required type="text" v-model="addUser.phone"/>
              </div>
            </div>
             <div class="input-div">
              
              <div class="input ">
                <label>Status</label>
                 <select
              required
              type="text"
              v-model="addUser.status"
              value="userData.status"
             
            >
              <option value="active">Active</option>
              <option value="disabled">Disabled</option>
            </select>
              </div>
            </div>

            
          </form>
        </div>

          <div class="btn-div">
              <button class="addUser" @click="AddUserPost">Add User</button>
              <button class="accept" @click="CloseAddUser">Cancel</button>
          </div>
        </div>
       </div>
      </div>
     </div>
    </transition>
   </div>


      <!-- Delete Modal Template -->
       <div v-if="deleteModel">
    <transition name="model">
     <div class="modal-mask">
      <div class="modal-wrapper">
       <div class="modal-dialog">
        <div class="modal-content">
          <div>
            <p class="modal-text">Are you sure you want to delete the User?</p>
          </div>

          <div class="btn-div">
              <button class="accept" @click="deleteUser">Yes, Delete</button>
              <button class="reject" @click="deleteModel=false">Cancel</button>
          </div>
        </div>
       </div>
      </div>
     </div>
    </transition>
   </div>
    </div>
  </div>
</template>
<script>

import {mapActions , mapState} from "vuex"
export default {
  name: "Users",

  data : function(){
    return {
        deleteModel:false,
        AddUserModel:false,
        addUser :{
          fname:"",
          lname:"",
          email:"",
          phone:"",
          status:"",
        }
    }
  },
  computed:{
    ...mapState(["users"]),
  },
  methods:{
    ...mapActions(["getUsers"]),

    routeTo(id){
      this.$router.push(`/users/update/${id} `)
      console.log(id);
    },

    // Add New User 
    AddUserPost(){
      console.log("name",this.addUser.fname)
      console.log("sdf",this.addUser.lname)
      console.log("namsdfsde",this.addUser.email)
      console.log("namesdf",this.addUser.phone)
      console.log("namsdfsde",this.addUser.status)
    },

    // Clear all  Add User input & close the Modal
    CloseAddUser(){
       this.addUser = {};
      this.AddUserModel = false;
    }, 

    // Delete User

    deleteUser(id){
      this.myModel =true;
      console.log(id);
    }
  },

  created(){
    this.getUsers();
  }
};
</script>

<style scoped>

.btn{
  border: none;
  border-radius: 20px;
  padding: 6px 25px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
}
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
    
    padding: 5px 8px;
    text-align: center;
  }

  .status.active{
    background-color: #c8e6c9;
    color: #ffffff;
  }
  .status.disabled{
    background-color: #c62828;
    color: #ffffff;
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



  /* Delete Modal */
   .modal-mask {
     position: fixed;
     z-index: 9998;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(0, 0, 0, .5);
     display: flex;
     justify-content: center;
     align-items: center;
     transition: opacity .3s ease;
   }

   

.modal-dialog{
  width:500px;
  height:300px;
  border-radius:10px;
  
  background:#ffffff;
  padding: 20px 10px;
}
.add-user-modal-dialog{
  width:900px;
  height:800px;
  border-radius:10px;
  
  background:#ffffff;
  padding: 20px 10px;
}
.add-user-modal-dialog .modal-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
 
}
.add-user-modal-dialog .modal-header p{
  font-size: 24px;
  font-weight: bold;
 color:#3c4b64;
}



.modal-text{
  font-size: 34px;
 
  text-align: center;
  color:#3c4b64;
  font-weight:bold;
}

.btn-div{
 margin-top: 100px;
 display: flex;
 justify-content: space-evenly;
}
.btn-div button{
   border: none;
  border-radius: 20px;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
}

.btn-div button.accept{
  background-color: #c62828;
   color:#ffffff;
}
.btn-div button.addUser{
  background-color: #3399ff;
   color:#ffffff;
}
.btn-div button.reject{
  background-color: #3c4b64;
   color:#ffffff;
}



/* Add User */
.input-div{
    margin-bottom:100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
   padding:0 30px;
    height:30px;
}


.input label {
  font-size: 24px;
  margin-bottom: 10px;
}

.input input,
.input select {
    margin-top:10px;
  width: 80%;
  display:block;
  background-color: #3c4b64;
  color:#ffffff;
  border-radius: 4px;
  padding: 12px 10px;
  border: none;
}

input:focus,
select:focus {
  outline: none;
}

</style>
