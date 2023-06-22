"use client"

import ViewPay from "@/Components/Pay/ViewPay";

export const metadata = {
    title: 'نتیجه پرداخت',
    description: 'Generated by create next app',
}

const Pay = (props) => {
  const { searchParams } = props;

  return (
    <div className="container">
        <ViewPay params={searchParams} />
    </div>
  )
}

export default Pay;
