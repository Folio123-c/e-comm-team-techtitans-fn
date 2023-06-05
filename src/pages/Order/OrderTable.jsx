import { useMemo } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllUsers } from "../../Redux/Features/User/viewUser/view.slice";
import { COLUMNS } from "../../components/Table/orderColumns";
import Table from "../../components/Table/";
import Data from "../../components/Table/order.json";

const UserTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = Data || [];

  return <Table columns={columns} data={data} />;
};

export default UserTable;
