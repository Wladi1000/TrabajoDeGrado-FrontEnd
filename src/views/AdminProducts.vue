<script setup>
import { ref, reactive } from "vue";

let productos = ref([]);
let nombreNuevo = ref("");
let precioNuevo = ref(null);
let cantidadNuevo = ref(null);

const añadirProducto = () => {
  productos.value.push({ nombre: nombreNuevo.value, precio: precioNuevo.value, cantidad: cantidadNuevo.value });
  console.log(productos.value);
  return;
};

const eliminarProducto = (p) =>{
  productos.value = productos.value.filter((e) => { return e.nombre != p.nombre });
  console.log(productos.value);
  return;
};

</script>
<template>
  <div class="container h-100">
    <div class="intro h-100">
      <div class="row h-100 justifu-content-center align-items-center">
        <div class="col-md-6">
          <h3>Pagina Over View</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quo
            veniam architecto, minima harum est? Ex est voluptatum aliquam
            temporibus eveniet a odio odit quos voluptate provident, nulla
            expedita nam.
          </p>
        </div>
        <div class="col-md-6">
          <img src="/img/svg/products.svg" alt="products" class="img-fl" />
        </div>
      </div>
    </div>
    <hr />
    <div class="product-test">
      <h3 class="d-inline-block">Products list</h3>
      <input
        class="form-control m-1"
        type="text"
        placeholder="Nombre Producto"
        v-model="nombreNuevo"
      />
      <input
        class="form-control m-1"
        type="number"
        placeholder="Precio Producto"
        v-model="precioNuevo"
      />
      <input
        class="form-control m-1"
        type="number"
        placeholder="Cantidad Producto Stock"
        v-model="cantidadNuevo"
      />
      <button @click="añadirProducto()" class="btn btn-primary float-right">
        Añadir Producto
      </button>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Mount</th>
              <th>Modify</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="producto in productos" :key="producto.nombre">
              <td>
                {{ producto.nombre }}
              </td>
              <td>
                {{ producto.precio }}
              </td>
              <td>
                {{ producto.cantidad }}
              </td>

              <td>
                <button class="btn btn-primary" @click="()=>{return;}">
                  Edit
                </button>
                <button class="btn btn-danger" @click="eliminarProducto(producto)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>