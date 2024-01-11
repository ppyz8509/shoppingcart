import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import qrcode from "qrcode"
import generatePayload from 'promptpay-qr';

const Bill = () => {
    const mobileNumber = "083-818-5090"
    const IdCardNumber = "0-0000-00000-00-0"
    const [svg, setSvg] = useState("")
    const carts = useSelector((state) => state.carts);
    const SubT = carts.reduce((total, product) => total +  product.quantity * product.price, 0);
    const totalBill = (SubT) => {
        if (SubT > 0) return SubT + 35;
    };

    useEffect(() => {
        const total = totalBill(SubT);
        generateQR(total);
    },[SubT]);

    const generateQR = (amount) => {
        const payload = generatePayload(mobileNumber, { amount }) //First parameter : mobileNumber || IDCardNumber
        // Convert to SVG QR Code
        const options  =  { type: 'svg', color: { dark: '#000', light: '#fff' } }
        qrcode.toString(payload, options, async (err, svg) => {
            if (err) return console.log(err)
            await setSvg(svg);
        })
    }
   
   

        
   
const handleCheckout = () => {
    Swal.fire({
        title: "<strong>Pay</strong>",
        icon: "info",
        html: `
        <img src="data:image/svg+xml;utf8, ${encodeURIComponent(svg)}"/>
        Please use any Bank application scan this QRCode to pat with PromptPay
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
      });
}
    return (
        <div className='justify-between mb-auto w-auto rounded-lg bg-white p-5 shadow-md md:mt-0 ' >
            <div className="mb-2 flex justify-between">
                <p className="text-black">
                    Subtotal
                </p>
                <p className="text-black">
                {SubT}
                </p>
            </div>
            <div className="mb-2 flex justify-between">
                <p className="text-black">
                    Shipping 
                </p>
                <p className="text-black">
                    {SubT > 0 ? "35฿" : 0}
                </p>
            </div>
            <hr className="my-4" />
            <div className="flext justity-between">
                <p className="text-lg font-bold">
                    total
                    </p>
                <div>
                    <p className="mb-1 text-lg font-bold">
                       {SubT > 0 ? totalBill(SubT) : 0}
                    </p>
                    <p className="text-sm text-black">including VAT</p>
                </div>
                <button className="mt-6 w-full rounded-md bg-black py-1 5 font-md text-white hover:bg-gray-400"
                onClick={handleCheckout}>
                    Buy
                </button>
            </div>
        </div>
      )
}

export default Bill