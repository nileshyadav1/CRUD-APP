<template>
  <div class="sidebar">
       <div class="title">
            CRUD Users
        </div>
        <div class="menu-items">
            <router-link to="/" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                   Dashboard
                </div>
            </router-link>
            <router-link to="/users" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                   Users
                </div>
            </router-link>
           
        </div>
      
    </div>
</template>

<script>
export default {
 name: 'Sidebar',
}
</script>

<style scoped>
.sidebar{
    background-color:#3c4b64
}

.title {
    color: white;
    font-size: 26px;
    margin-top: 10px;
    
    text-align: center;
}
.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 6px;
}
.menu-items > * {
    margin-top: 30px;
}
.side-btn {
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: white;
    background-color: transparent;
}
.side-btn:focus {
    outline: none;
}
.side-btn.active {
    position: relative;
    background-color: white;
    color: teal;
    font-weight: 600;
    margin-left: 10px;
    border-radius: 30px 0 0 30px;
}

</style>