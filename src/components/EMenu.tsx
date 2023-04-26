import Link from "next/link";

export default function EMenu() {
    return (
        <div className="flex justify-start items-start px-40 py-20 h-full">
            <ul className="flex flex-col gap-4 h-full">
                <li className="emenu-item">\
                    <Link href={""}>Multiplayer</Link>
                </li>
                <li className="emenu-item">
                    <Link href={""}>Single Player</Link>
                </li>
                <li className="emenu-item">
                    <Link href={""}>Rules</Link>
                </li>
                <li className="emenu-item">
                    <Link href={""}>History</Link>
                </li>
                <li className="emenu-item">
                    <Link href="/credits">Credits</Link>
                </li>
            </ul>
        </div>
    )
  }