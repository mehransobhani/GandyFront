import Thead from "../Table/Thead";
import Table from "../Table/Table";
import {AttributeNameTableRow} from "./AttributeNameTableRow";

export const AttributeNameTablePanel = ({editMode , editItem , reload}) => {
    return (
        <>
            <Table>
                <Thead heads={[
                    {title:"نام ویژگی"},
                    {title:"ویرایش"},
                    {title:"حذف"},

                ]}/>
                <tbody>
                <AttributeNameTableRow editMode={editMode} editItem={editItem} reload={reload} />
                </tbody>
            </Table>
        </>
    )
}
