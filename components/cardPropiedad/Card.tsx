/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import dormitorios from "./dormitorios.png";
import baños from "./baños.png";

const Card = ({ propiedad }: any) => {
  return (
    <div
      key={propiedad.title}
      className="w-11/12 sm:w-auto mx-auto box-shadow my-4 rounded"
    >
      <img src={propiedad.image} alt={propiedad.title} className="rounded-t" />
      <div>
        <h2 className="text-center font-bold text-regular mb-3 mt-3 ">
          {propiedad.title}{" "}
          <span className="text-[#B60D12] font-bold">{propiedad.price}</span>
        </h2>
        <p className="text-center mb-4 text-zinc-900 xl:text-xs">
          {propiedad.location}
        </p>
      </div>
      <div className="pb-4 text-sm">
        <ul className="flex justify-center gap-4 xl:text-xs">
          <li className="flex items-center">
            <Image
              src={dormitorios}
              alt="icon dormitorios"
              className="mr-2 w-3"
            />
            {propiedad.dormitorios}
            <span className="ml-2">Dormitorios</span>
          </li>
          <li className="flex items-center">
            <Image src={baños} alt="pepe" className="mr-2 w-3" />
            {propiedad.baños}
            <span className="ml-2 ">Baños</span>
          </li>
          <li className="flex items-center">
            <svg
              width="10"
              height="10"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M0.95625 1.63232V2.39062C0.95625 2.51743 0.905876 2.63904 0.81621 2.72871C0.726544 2.81838 0.604932 2.86875 0.478125 2.86875C0.351318 2.86875 0.229705 2.81838 0.14004 2.72871C0.0503738 2.63904 0 2.51743 0 2.39062V0.478125C0 0.351318 0.0503738 0.229705 0.14004 0.14004C0.229705 0.0503738 0.351318 0 0.478125 0H2.39062C2.51743 0 2.63904 0.0503738 2.72871 0.14004C2.81838 0.229705 2.86875 0.351318 2.86875 0.478125C2.86875 0.604932 2.81838 0.726544 2.72871 0.81621C2.63904 0.905876 2.51743 0.95625 2.39062 0.95625H1.63232L2.72866 2.05259C2.81575 2.14277 2.86395 2.26354 2.86286 2.3889C2.86177 2.51427 2.81148 2.63419 2.72284 2.72284C2.63419 2.81148 2.51427 2.86177 2.3889 2.86286C2.26354 2.86395 2.14277 2.81575 2.05259 2.72866L0.95625 1.63232ZM5.25938 0.95625C5.13257 0.95625 5.01096 0.905876 4.92129 0.81621C4.83162 0.726544 4.78125 0.604932 4.78125 0.478125C4.78125 0.351318 4.83162 0.229705 4.92129 0.14004C5.01096 0.0503738 5.13257 0 5.25938 0H7.17188C7.29868 0 7.42029 0.0503738 7.50996 0.14004C7.59963 0.229705 7.65 0.351318 7.65 0.478125V2.39062C7.65 2.51743 7.59963 2.63904 7.50996 2.72871C7.42029 2.81838 7.29868 2.86875 7.17188 2.86875C7.04507 2.86875 6.92346 2.81838 6.83379 2.72871C6.74412 2.63904 6.69375 2.51743 6.69375 2.39062V1.63232L5.59741 2.72866C5.50723 2.81575 5.38646 2.86395 5.2611 2.86286C5.13573 2.86177 5.01581 2.81148 4.92717 2.72284C4.83852 2.63419 4.78823 2.51427 4.78714 2.3889C4.78605 2.26354 4.83425 2.14277 4.92134 2.05259L6.01768 0.95625H5.25938ZM0.478125 4.78125C0.604932 4.78125 0.726544 4.83162 0.81621 4.92129C0.905876 5.01096 0.95625 5.13257 0.95625 5.25938V6.01768L2.05259 4.92134C2.14277 4.83425 2.26354 4.78605 2.3889 4.78714C2.51427 4.78823 2.63419 4.83852 2.72284 4.92717C2.81148 5.01581 2.86177 5.13573 2.86286 5.2611C2.86395 5.38646 2.81575 5.50723 2.72866 5.59741L1.63232 6.69375H2.39062C2.51743 6.69375 2.63904 6.74412 2.72871 6.83379C2.81838 6.92346 2.86875 7.04507 2.86875 7.17188C2.86875 7.29868 2.81838 7.42029 2.72871 7.50996C2.63904 7.59963 2.51743 7.65 2.39062 7.65H0.478125C0.351318 7.65 0.229705 7.59963 0.14004 7.50996C0.0503738 7.42029 0 7.29868 0 7.17188V5.25938C0 5.13257 0.0503738 5.01096 0.14004 4.92129C0.229705 4.83162 0.351318 4.78125 0.478125 4.78125ZM4.92134 5.59741C4.83425 5.50723 4.78605 5.38646 4.78714 5.2611C4.78823 5.13573 4.83852 5.01581 4.92717 4.92717C5.01581 4.83852 5.13573 4.78823 5.2611 4.78714C5.38646 4.78605 5.50723 4.83425 5.59741 4.92134L6.69375 6.01768V5.25938C6.69375 5.13257 6.74412 5.01096 6.83379 4.92129C6.92346 4.83162 7.04507 4.78125 7.17188 4.78125C7.29868 4.78125 7.42029 4.83162 7.50996 4.92129C7.59963 5.01096 7.65 5.13257 7.65 5.25938V7.17188C7.65 7.29868 7.59963 7.42029 7.50996 7.50996C7.42029 7.59963 7.29868 7.65 7.17188 7.65H5.25938C5.13257 7.65 5.01096 7.59963 4.92129 7.50996C4.83162 7.42029 4.78125 7.29868 4.78125 7.17188C4.78125 7.04507 4.83162 6.92346 4.92129 6.83379C5.01096 6.74412 5.13257 6.69375 5.25938 6.69375H6.01768L4.92134 5.59741Z"
                fill="#0D0D0D"
              />
            </svg>
            {propiedad.superficie}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
