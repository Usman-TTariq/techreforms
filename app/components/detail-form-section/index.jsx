import React from "react";
import CapsuleLabel from "../common/capsule-label";
import Image from "next/image";

const DetailFormSection = () => {
  return (
    <div className="container pb-[60px]">
      <div className="relative bg-[#161616] rounded-2xl py-[30px] px-[30px]">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-4">
            <div className="pb-[10px]">
              <CapsuleLabel firstWord="Contact" secondWord="Us" />
            </div>
            <div className="font-britanicaBlack text-[45px] leading-[45px] font-black">
              <span className="text-white">Partner with Us for</span>
              <br />
              <span className="text-[#F74B1C]">Comprehensive</span>
              <br />
              <span className="text-white">Digital Solutions</span>
            </div>
            <div className="flex items-center justify-start py-[30px]">
              <Image
                className="w-[40px]"
                src="/images/callusicon.png"
                alt="Hero Background"
                width={1000}
                height={1000}
              />
              <div className="text-white font-britanicaRegular text-[22px]">
                Call us at:{" "}
              </div>
              <div className="text-white font-britanicaRegular font-bold text-[22px]">
                (213) 262-5357
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="rounded-xl bg-black p-[20px]">
              <div className="pb-[10px] flex items-center justify-center">
                <CapsuleLabel firstWord="Schedule a free consultation" secondWord="" />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="pl-[30px]">
              <div className="font-britanicaBlack text-[45px] leading-[45px] font-black">
                <span className="text-white">What </span>
                <span className="text-[#F74B1C]">happens</span>
                <br />
                <span className="text-white">next?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFormSection;
