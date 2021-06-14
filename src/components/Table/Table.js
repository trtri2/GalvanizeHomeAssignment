function Table(props) {
  const {
    // top level row
    categories,
  
    // data given in an array/object, each row is in an array of itself. i.e. [ [id, image, name, descrtiptinop], [...] ]
    tableData,
    ...moreProps
  } = props;

  return (
    <table>
      <tbody>
        <tr>
          <td>id</td>
          <td>image</td>
          <td>name</td>
          <td>description</td>
        </tr>
        <tr>
          <td>id1</td>
          <td>image1</td>
          <td>name1</td>
          <td>description1</td>
        </tr>

      </tbody>

    </table>
  );
}

export default Table;
