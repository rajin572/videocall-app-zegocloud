"use client";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function JoinCallSection() {
  const { fullName, setFullName } = useUser();
  const [roomID, setRoomID] = useState("");
  const router = useRouter();

  console.log(fullName);
  console.log(roomID);

  useEffect(() => {
    setFullName("");
  }, [setFullName]);
  return (
    <div className="h-screen w-full bg-gray-950  text-green-700">
      <div className="container mx-auto flex flex-col justify-center items-center h-full">
        <div className="max-w-xl mx-auto text-center">
          <Image
            src="/next.svg"
            alt="next Logo"
            className="text-center mx-auto mb-10"
            width={300}
            height={200}
            priority
          />
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text  font-extrabold text-transparent text-5xl">
            {`Prem Korun Ek Click e`}
          </h1>
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent text-5xl">
            <span className="block">Notun Meyeder Sathe</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex velit, officiis qui architecto.
          </p>
          <div className="mt-10">
            <input
              type="text"
              id="name"
              onChange={(e) => setFullName(e.target.value.toString())}
              className="border rounded-md focus:border-transparent focus:outline-none focus:ring-0 px-4 py-2 w-full text-black"
              placeholder="Enter your name"
            />
          </div>
          {fullName && fullName.length >= 3 && (
            <>
              <div className="flex items-center justify-center gap-4 mt-6">
                <input
                  type="text"
                  id="roomid"
                  value={roomID}
                  onChange={(e) => setRoomID(e.target.value)}
                  className="border rounded-md focus:border-transparent focus:outline-none focus:ring-0 px-4 py-2 w-full text-black"
                  placeholder="Enter room ID to join a meeting"
                />
                <button
                  className="rounded-md bg-blue-600 px-10 py-[11px] text-sm font-medium text-white focus:outline-none sm:w-auto"
                  onClick={() => router.push(`/room/${roomID}`)}
                  disabled={!roomID}
                >
                  Join
                </button>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <button
                  className="text-lg font-medium hover:text-blue-400 hover:underline"
                  onClick={() => router.push(`/room/${uuid()}`)}
                >
                  Or create a new meeting
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
