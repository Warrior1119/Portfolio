import React from "react";

export default () => {
  const photos = [
    {
      src: "http://example.com/example/img1.jpg",
      width: 4,
      height: 3
    },
    {
      src: "http://example.com/example/img2.jpg",
      width: 1,
      height: 1
    }
  ];
  return (
    <div>
      <h3 className="text-orange-600">Welcome! Sign up or Sign in!</h3>
    </div>
  );
};
