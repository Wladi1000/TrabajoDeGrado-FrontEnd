<script setup>
import { onMounted, ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "vue-router";
let loginForm = ref(true);

const router = useRouter();
const errMsg = ref(); // Mensaje de error

let email = ref(""),
  password = ref(""),
  name = ref("");

const invocarLogin = () => {
  loginForm.value = true;
};
const invocarSignup = () => {
  loginForm.value = false;
};

const registrar = () => {
  const auth = getAuth(); // Sale de firebase/auth
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Registrado de forma exitosa!");
      console.log(auth.currentUser);
      router.push("/Inicio"); //Redireccionar al inicio del cliente
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const login = () => {
  const auth = getAuth(); // Sale de firebase/auth
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Registrado de forma exitosa!");
      console.log(auth.currentUser);
      router.push("/Inicio"); //Redireccionar al inicio del cliente
    })
    .catch((error) => {
      console.log(error.code);
      //alert(error.message);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Correo invalido";
          break;
        case "auth/user-not-found":
          errMsg.value = "No se ha conseguido una cuenta con este correo";
          break;
        case "auth/wrong-password":
          errMsg.value = "Contraseña incorrecta";
          break;
        default:
          errMsg.value = "Correo o contraseña incorrectos";
          break;
      }
    });
};

const signInWithGoogle = () => {};

//-----------------------
</script>
<template>
  <div class="login">
    <!-- Modal -->
    <div
      class="modal fade"
      id="login"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Iniciar sesion
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ul
              class="nav nav-fill nav-pills mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  @click="invocarLogin()"
                  class="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                  >Login
                </a>
              </li>
              <li class="nav-item">
                <a
                  @click="invocarSignup()"
                  class="nav-link"
                  id="pills-register-tab"
                  data-toggle="pill"
                  href="#pills-register"
                  role="tab"
                  aria-controls="pills-register"
                  aria-selected="false"
                  >Signup
                </a>
              </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="pills-login-tab"
                v-show="loginForm"
              >
                <h5 class="text-center">Login Please</h5>
                <div class="form-group">
                  <p v-if="errMsg" style="color: red;">{{ errMsg }}</p>
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small class="form-text text-muted"
                    >We'll never share your email with anyone else.</small
                  >
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    @keyup.enter="login()"
                    v-model="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <div class="form-group">
                  <button
                    class="btn btn-primary"
                    @click="login()"
                    data-bs-dismiss="modal"
                  >
                    Login
                  </button>
                </div>
              </div>
              <div
                v-show="!loginForm"
                class="tab-pane fade show active"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="pills-register-tab"
              >
                <h5 class="text-center">Create New Account</h5>

                <div class="form-group">
                  <label for="name">Your name</label>
                  <input
                    type="text"
                    v-model="name"
                    class="form-control"
                    id="name"
                    placeholder="Your nice name"
                  />
                </div>

                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div class="form-group">
                  <button
                    class="btn btn-primary"
                    @click="registrar(email, password)"
                    data-bs-dismiss="modal"
                  >
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>