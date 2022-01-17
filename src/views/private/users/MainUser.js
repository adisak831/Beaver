import React from "react";
import IndexUeer from "./indexUser";
import SVGadd from "../../../assets/svg/SVGAdd";
import SVGsearch from "../../../assets/svg/SVGSearch";
import SVGclock from "../../../assets/svg/SVGClockwise";

export default function Mainuser() {
    return  (
        <div>
            <div className="flex flex-wrap mx-auto">
                <div className="w-full pr-2 mb-2 md:w-1/2">
                    <h4 className="text-blue-500">
                        <strong>ข้อมูลผู้ใช้งาน</strong>
                    </h4>
                </div>
                <div className="w-full pr-2 mb-2 text-right md:w-1/2"> 
                    <button className="mr-1 btn btn-green btn-sm">
                        <SVGadd color="white "/>เพิ่มใหม่
                    </button>
                </div> 
            </div> 
                
            <div className="mt-2 bg-white border-b border-l border-r border-gray-800"></div>

            <div className="mt-10">
                    <div className="flex ">
                    <div className="w-full">
                        <div className="flex flex-wrap mx-auto justify-left">
                        <div className="w-full pr-2 mb-2 md:w-1/4">
                            <input
                            className="field-input"
                            placeholder="ค้นหาชื่อผู้ใช้งาน"
                            />
                        </div>
                        <div className="w-full pr-2 mb-2 md:w-1/4">
                            <button className="mr-1 btn btn-green btn-md"><SVGsearch color="white"/>ค้นหา</button>
                            <button className="mr-1 btn btn-gray btn-md"><SVGclock color="white"/>ล้าง</button> 
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="mt-2">
                        <IndexUeer/>
                    </div>
                </div>
        </div>
    )
}