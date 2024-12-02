function ProductRow() {
  const { name, price, inStock } = product;
  return (
    <tr style={{ color: inStock ? "black" : "red" }}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
