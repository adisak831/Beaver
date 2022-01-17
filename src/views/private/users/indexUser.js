import React from 'react';
import SVGedit from "../../../assets/svg/SVGEdit"
import SVGdelete from "../../../assets/svg/SVGDeleteV1"

export default function IndexUser(){
    return <div className="flex flex-col div-tb"> 
            <table className="main-w-full ">
                <thead className="bg-blue-500">
                    <tr className="text-white">
                        <th className="tb-td">ลำดับ</th>
                        <th className="tb-td">รหัสผู้ใช้งาร</th>
                        <th className="tb-td">ชื่อ-นามสกุล</th>
                        <th className="tb-td">อีเมล</th>
                        <th className="tb-td">สถานะ</th>
                        <th className="tb-td">จัดการ</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="tb-td">KARM</td> 
                        <td className="tb-td">KARM</td> 
                        <td className="tb-td">KARM</td> 
                        <td className="tb-td">KARM</td> 
                        <td className="tb-td">KARM</td> 
                        <td>
                            <div className="flex justify-start item-center"> 
                                <button> {" "}<SVGedit color="white"/></button>
                                <button> {" "}<SVGdelete/></button> 
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> 
}