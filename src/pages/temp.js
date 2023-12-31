import { Inter } from "next/font/google";
import { useState } from "react";
import { useEffect } from "react";

export default function Temp() {
  const [url, setUrl] = useState("");
  const [bruh, setBruh] = useState("");

  useEffect(() => {
    console.log(bruh);
  }, [bruh]);

  const scrape = async (e) => {
    e.preventDefault();
    const test = fetch("/api/fetch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ link: url }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    setBruh(test);
  };

  return (
    <div>
      <form onSubmit={scrape}>
        <input
          id="url"
          name="url"
          value={url}
          required={true}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
