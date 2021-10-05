<template>
  <div class="single-user">
    <div class="single-user-table">
      <div class="title">
        <h1>User ID : {{ ParamID }}</h1>
        <router-link to="/users">Go Back</router-link>
      </div>

      <div v-if="userData">
      

        <div class="form-content">
          <form >
            <div class="input-div">
              <div class="input ">
                <label>Name</label>
                <input required type="text" v-model="userData.fname" />
              </div>
              <div class="input ">
                <label>Last Name</label>
                <input required type="text"  v-model="userData.lname"/>
              </div>
            </div>
             <div class="input-div">
              <div class="input ">
                <label>Email</label>
                <input required type="text" v-model="userData.email"/>
              </div>
              <div class="input ">
                <label>Contact</label>
                <input required type="text" v-model="userData.phone"/>
              </div>
            </div>
             <div class="input-div">
              
              <div class="input ">
                <label>Status</label>
                 <select
              required
              type="text"
              v-model="userData.status"
              value="userData.status"
             
            >
              <option value="active">Active</option>
              <option value="disabled">Disabled</option>
            </select>
              </div>
            </div>

            <div class="save">

            <button class="save-btn" type="submit" @click="SaveUpdate">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SingleUser",

  data: () => ({
    ParamID: "",
    userData: null,
  }),

  methods: {
    getSingleUserData: function(id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/users/?id=${id}`)
          .then((response) => {
            this.userData = response.data[0];
            resolve(response);
            console.log("Single User Data", response);
          })
          .catch((error) => {
            console.log(" Error", error);
            reject(error);
          });
      });
    },

    SaveUpdate(e){
        e.preventDefault();
        console.log( this.userData.fname);
    }
  },

  created() {
    this.ParamID = this.$route.params.id;

    this.getSingleUserData(this.$route.params.id);
  },
};
</script>

<style scoped>
.single-user {
  width: 90%;
  height: 100%;
  padding: 3% 5%;
  overflow-x: hidden;
}

.single-user-table {
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
  margin-bottom: 30px;
}

.title a {
  border: none;
  border-radius: 20px;
  text-decoration: none;
  padding: 6px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: #3399ff;
}

.input-div{
    margin-bottom:100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
   padding:0 30px;
    height:30px;
}
/* .input{
     background-color: red;
} */

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

.save{
     padding:0 30px;
}
.save .save-btn{
     border: none;
  border-radius: 20px;
  text-decoration: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: #3399ff;
}
</style>
