import "./List.css";
import Sidebar from "../../ components/sidebar/Sidebar";
import Navbar from "../../ components/navbar/Navbar";
import DataTable from "../../ components/datatable/DataTable";

export default function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listcontainer">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
}
