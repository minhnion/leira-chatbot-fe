import Icons from "../icons/icons";
import Logos from "../logos/logos";

export function Header() {
  return (
    <header className="bg-gray-800 flex items-center justify-center shadow-md">
      <Logos.Logo className="h-20" />
    </header>
  );
}
