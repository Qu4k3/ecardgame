import Link from "next/link";

export default function EMenu() {
    return (
        <div className="flex justify-center items-center h-full">
            <ul>
                <li>
                    <Link href={""}>Multiplayer</Link>
                </li>
                <li>
                    <Link href={""}>Single Player</Link>
                </li>
                <li>
                    <Link href={""}>Rules</Link>
                </li>
                <li>
                    <Link href={""}>History</Link>
                </li>
                <li>
                    <Link href={""}>Credits</Link>
                </li>
            </ul>
        </div>
    )
  }