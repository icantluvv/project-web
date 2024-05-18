import React from "react";

const Message = () => {
    return (
        <div className="w-[95%] mb-[3em] flex justify-end items-center">
            <button
                type="button"
                className="pt-2 rounded-md pb-2 pl-4 pr-4 text-white bg-[#4798DE]"
            >
                Отправьте нам сообщение
            </button>
        </div>
    );
};

export default Message;
