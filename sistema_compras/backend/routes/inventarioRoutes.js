const express = require('express');
const router = express.Router();

const inventarioController = {
  getInventario: (req, res) => {
 
    res.send('Lista de productos');
  },
  getFaltantes: (req, res) => {

    res.send('Productos faltantes');
  },
  addProducto: (req, res) => {

    res.send('Producto agregado');
  },
  updateProducto: (req, res) => {
 
    res.send(`Producto con ID ${req.params.id} actualizado`);
  },
  deleteProducto: (req, res) => {

    res.send(`Producto con ID ${req.params.id} eliminado`);
  }
};

router.get('/', inventarioController.getInventario);
router.get('/faltantes', inventarioController.getFaltantes);
router.post('/', inventarioController.addProducto);
router.put('/:id', inventarioController.updateProducto);
router.delete('/:id', inventarioController.deleteProducto);

module.exports = router;
