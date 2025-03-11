"use-client";

export default function Success() {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen p-6"
            style={{
                backgroundImage: "url('/images/success_bg.jpg') ",
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
                            fill="#43d046"
                            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
                        />
                    </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Thanh toán thành công!
                </h2>
                <p className="text-gray-600 mb-4">
                    antiSCM chúc bạn có những trải nghiệm tuyệt vời với các khóa
                    học của chúng tôi.
                </p>
                <div className="mt-[50px]">
                    <div className="flex justify-between">
                        <p>Người dùng: </p>
                        <p className="text-gray-600">Viet Vy</p>
                    </div>
                    <div className="flex justify-between mt-7">
                        <p>Ngày mua: </p>
                        <p className="text-gray-600">19/02/2025</p>
                    </div>
                    <div className="flex justify-between mt-7">
                        <p>Gói đăng kí: </p>
                        <p className="text-gray-600">3 tháng</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
