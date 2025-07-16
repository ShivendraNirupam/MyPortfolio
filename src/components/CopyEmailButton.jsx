import { useState } from "react"


const CopyEmailButton = () => {
    const [copied, setcopied] = useState(false)
    const [copiedText, setCopiedtext] = useState("Copy Email")
    const email = "nirupamgeek@gmail.com"

    const copytoClipboard = () => {
        navigator.clipboard.writeText(email);
        setcopied(true)
        setCopiedtext("Email Copied")
        setTimeout(() => {
            setcopied(false)
            setCopiedtext("Copy Email")
        }, 2000);
    }

  return (
    <button onClick={copytoClipboard} className="btn-cpy relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden hover:scale-110">
        <p className="flex items-center justify-center gap-2">
            <img src="assets/copy.svg" alt="Copy Icon" className="w-5"/>
            {copiedText}
        </p>
    </button>
  )
}

export default CopyEmailButton