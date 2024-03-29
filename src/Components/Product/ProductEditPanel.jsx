import Input from "../Form/Input";
import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import CancelButton from "../Button/CancelButton";
import {toast} from "react-toastify";
import {editProduct} from "../../Api/Product";

export function ProductEditPanel({item , cancel ,reload}) {

    const [name,setName]=useState(item.name);
    const [description,setDescription]=useState(item.description);
    const [amazingOffer,setAmazingOffer]=useState(item.amazingOffer);
    const [productType,setProductType]=useState(item.productType);
    const [brand,setBrand]=useState(item.brand);

    async function submit() {
        let response =await editProduct()
        reload();
        toast.success("عملیات با موفقیت انجام شد")

    }

    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ویرایش مقاله
                    </h2>
                </div>
                <hr/>

                    <div className="space-y-12">

                        <div className=" ">


                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        نام محصول
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"نام محصول"} type={"text"} change={(e) => {
                                            setName(e.target.value)
                                        }} value={name}/>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        توضیحات
                                    </label>
                                    <div className="mt-2">
                                        <Input placeHolder={"توضیحات"} type={"text"} change={(e) => {
                                            setDescription(e.target.value)
                                        }} value={description}/>

                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        برند
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            className={["block w-full bg-white rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-indigo-500   sm:text-sm sm:leading-6 "].join(" ")}
                                        >
                                            <option>انتخاب کنید</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        نوع کالا
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            className={["block w-full bg-white rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-indigo-500   sm:text-sm sm:leading-6 "].join(" ")}
                                        >
                                            <option>انتخاب کنید</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="col-span-full">
                                    <label htmlFor="street-address"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        پیشنهاد ویژه
                                    </label>
                                    <div className="mt-2">
                                    <label className="inline-flex items-center me-5 cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer"
                                                   checked={amazingOffer} onChange={(e) => {
                                                setAmazingOffer(e.target.checked)
                                            }}/>
                                            <div
                                                className="relative w-11 h-6 bg-gray-200 rounded-full peer   peer-focus:ring-4 peer-focus:ring-purple-300   peer-checked:after:-translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>

                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-center gap-x-6">
                        <ConfirmButton title={"ویرایش"} click={submit}/>
                        <CancelButton title={"انصراف"}  click={cancel}/>
                    </div>
            </div>

        </>
    )
}
