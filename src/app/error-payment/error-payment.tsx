"use client";

export default function ErrorPayment() {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen p-6"
            style={{
                backgroundImage: "url('/images/error_bg.png') ",
                backgroundSize: "cover", // Hoặc "contain"
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md opacity-90">
                <div className="flex justify-center mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-[100px]"
                    >
                        <path
                            fill="#d33c3c"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                        />
                    </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Thanh toán thất bại
                </h2>
                <p className="text-gray-600 mb-4">
                    Hình như đã xảy ra lỗi trong quá trình thanh toán xin vui
                    lòng thử lại.
                </p>
            </div>
        </div>
    );
}