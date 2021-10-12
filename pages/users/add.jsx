import { Layout, AddEdit } from "components/users";

export default Add;

function Add() {
  return (
    <Layout>
      <h1 style={{ marginLeft: "100px" }}>Add User</h1>
      <AddEdit />
    </Layout>
  );
}
