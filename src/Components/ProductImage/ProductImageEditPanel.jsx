import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import DatePicker from 'react-datepicker2';
import CancelButton from "../Button/CancelButton";
import Uploader from "../Form/Uploader";

export function ProductSuggestInsertPanel({item , cancel ,reload}) {

     const [file,setFile]=useState(item.file);
    const [product,setProduct]=useState(item.product);

    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        آپلود تصویر محصول
                    </h2>
                </div>
                <hr/>

                <form>
                    <div className="space-y-12">

                        <div className=" ">


                            <div className="mt-10 flex flex-col gap-x-6 gap-y-8 sm:grid-cols-3">
                                <div className="sm:col-span-3">

                                    <div className="mt-2">
                                        <Uploader/>

                                    </div>
                                </div>

                                <div className="sm:col-span-2 justify-center">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        محصول
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            className={["block w-full bg-white rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-indigo-500   sm:text-sm sm:leading-6 " ].join(" ")}
                                        >
                                            <option>انتخاب کنید</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-center gap-x-6">
                        <ConfirmButton title={"ثبت"}/>
                        <CancelButton title={"انصراف"} click={cancel}/>
                    </div>
                </form>
            </div>

        </>
    )
}
