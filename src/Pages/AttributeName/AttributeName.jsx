import withAuth from "../../AuthMiddleware";
import AdminLayout from "../../Layout/AdminLayout";
import {SearchBox} from "../../Components/Form/SearchBox";
import Pagination from "../../Components/Pagination";
import {useState} from "react";
import {AttributeNameTablePanel} from "../../Components/AttributeName/AttributeNameTablePanel";
import {AttributeNameInsertPanel} from "../../Components/AttributeName/AttributeNameInsertPanel";
import {AttributeNameEditPanel} from "../../Components/AttributeName/AttributeNameEditPanel";
import {getAttributeName} from "../../Api/AttributeName";

export const AttributeName =withAuth( () => {
    const [search, setSearch] = useState("");
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState(undefined);
    const [data, setData] = useState(undefined);

   async function getData()
    {
        let data =await  getAttributeName();
    }
    return (
        <>
            <AdminLayout>
                <div className={"mb-10"}>
                    {edit ? <AttributeNameEditPanel item={editItem} reload={getData} cancel={() => {
                        setEdit(false)
                    }}/> : <AttributeNameInsertPanel reload={getData}/>}
                </div>
                <div className={"mb-10"}>
                    <hr/>
                </div>
                <div className={"mb-10"}>
                    <SearchBox searchSubmit={getData} change={setSearch}/>
                </div>
                <div className={"mb-10"}>
                    <AttributeNameTablePanel
                        editMode={() => {
                            setEdit(true)
                        }}
                        editItem={setEditItem}
                        data={data}
                        reload={getData}
                    />
                </div>
                <div className={"mb-10"}>
                    <Pagination currentPage={1} totalPage={10}/>
                </div>
            </AdminLayout>
        </>
    )
})
