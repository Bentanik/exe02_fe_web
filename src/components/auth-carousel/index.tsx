"use client";
import Image from "next/image";

export default function AuthCarousel() {
  return (
    // <Carousel
    //   plugins={[
    //     Autoplay({
    //       delay: 2500,
    //       stopOnInteraction: false,
    //     }),
    //   ]}
    // >
    //   <CarouselContent>
    //     <CarouselItem>
    //       <div className="absolute w-full h-[100vh]">
    //         <Image
    //           src={"/images/carousel_authentication_01.webp"}
    //           alt="Authen01"
    //           layout="fill"
    //           priority
    //         />
    //         <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    //         <div className="absolute bottom-[30%] translate-y-1/2 inset-0 flex justify-center items-center">
    //           <p className=" text-2xl leading-normal text-gray-50 text-center _alternates">
    //             Lừa đảo không ngừng sáng tạo
    //             <br />
    //             bạn không được ngừng học hỏi
    //           </p>
    //         </div>
    //       </div>
    //     </CarouselItem>
    //     {/* <CarouselItem>
    //       <div className="absolute w-full h-[100vh]">
    //         <Image
    //           src={"/images/carousel_authentication_02.jpg"}
    //           alt="ảnh 1"
    //           layout="fill"
    //           priority
    //         />
    //         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    //         <div className="absolute bottom-[30%] translate-y-1/2 inset-0 flex justify-center items-center">
    //           <p className=" text-2xl leading-normal text-gray-50 text-center _alternates">
    //             Chỉ một khoảnh khắc mất cảnh giác
    //             <br />
    //             bạn có thể hối tiếc cả đời.
    //           </p>
    //         </div>
    //       </div>
    //     </CarouselItem>
    //     <CarouselItem>
    //       <div className="relative w-full h-[100vh]">
    //         <Image
    //           src={"/images/carousel_authentication_03.jpg"}
    //           alt="ảnh 2"
    //           layout="fill"
    //           priority
    //         />
    //         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    //         <div className="absolute bottom-[30%] translate-y-1/2 inset-0 flex justify-center items-center">
    //           <p className=" text-2xl leading-normal text-gray-50 text-center _alternates">
    //             Đừng để lòng tin mù quáng trở thành công cụ của kẻ gian.
    //           </p>
    //         </div>
    //       </div>
    //     </CarouselItem> */}
    //   </CarouselContent>
    // </Carousel>

    <div className="absolute w-full h-[100vh]">
      <Image
        src={"/images/carousel_authentication_01.webp"}
        alt="Authen01"
        layout="fill"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute bottom-[30%] translate-y-1/2 inset-0 flex justify-center items-center">
        <p className=" text-2xl leading-normal text-gray-50 text-center _alternates">
          Lừa đảo không ngừng sáng tạo
          <br />
          bạn không được ngừng học hỏi
        </p>
      </div>
    </div>
  );
}
