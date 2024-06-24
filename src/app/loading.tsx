import React from "react";

const Loading = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-8 h-8 border-4 border-primary border-solid rounded-full animate-spin" />
        </div>
    );
};

export default Loading;