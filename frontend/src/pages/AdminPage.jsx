import AddLine from "@components/AddLine";
import UpdateLine from "@components/UpdateLine";
import DeleteLine from "@components/DeleteLine";
import "../styles/adminPage.css";

function AdminPage() {
  return (
    <div className="flex_contain">
      <h1>Page admin</h1>
      <div className="contain">
        <AddLine />
      </div>
      <div className="contain">
        <UpdateLine />
      </div>
      <div className="contain">
        <DeleteLine />
      </div>
    </div>
  );
}

export default AdminPage;
