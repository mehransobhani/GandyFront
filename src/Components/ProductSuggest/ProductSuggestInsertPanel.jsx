import {useState} from "react";
import ConfirmButton from "../Button/ConfirmButton";
import DatePicker from 'react-datepicker2';
import {toast} from "react-toastify";
import {insertProductSuggest} from "../../Api/ProductSuggest";

 export function ProductSuggestInsertPanel({reload}) {

    const [product,setProduct]=useState("");
    const [created_at,setCreated_at]=useState("");
    const [expire_at,setExpire_at]=useState("");

    function changeDate(e){
        console.log('Selected Date and Time:', e.format('YYYY-MM-DD HH:mm:ss'));
    }
     async function submit() {
         let response =await insertProductSuggest()
         reload();
         toast.success("عملیات با موفقیت انجام شد")

     }
    return (
        <>
            <div className={"bg-white md:mx-20 mx-5"}>
                <div className="flex">
                    <h2 className={"text-indigo-800 font-bold text-3xl mx-auto mb-5"}>
                        ثبت کالای پیشنهادی
                    </h2>
                </div>
                <hr/>

                     <div className="space-y-12">

                        <div className=" ">


                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        تاریخ ایجاد
                                    </label>
                                    <div className="mt-2">
                                        <div>
                                            <DatePicker

                                                onChange={changeDate}
                                                persianDigits={true}
                                                timePicker={true}
                                                inputFormat={"Y-m-d"}
                                                className={"text-center block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base   focus:border-indigo-500 focus:outline-0"}
                                                isGregorian={false}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        تاریخ انقضا
                                    </label>
                                    <div className="mt-2">
                                        <div>
                                            <DatePicker

                                                onChange={changeDate}
                                                persianDigits={true}
                                                timePicker={true}
                                                inputFormat={"Y-m-d"}
                                                className={"text-center block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base   focus:border-indigo-500 focus:outline-0"}
                                                isGregorian={false}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                       محصول
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            className={["block w-full bg-white rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:outline focus:outline-1 focus:outline-indigo-500   sm:text-sm sm:leading-6 "].join(" ")}
                                        >
                                            <option>انتخاب کنید</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-center gap-x-6">
                        <ConfirmButton title={"ثبت"} click={submit}/>
                    </div>
             </div>

        </>
    )
 }
