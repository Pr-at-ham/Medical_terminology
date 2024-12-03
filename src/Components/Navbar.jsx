import Logo from "../assets/KLE-Logo-ISO-02-02-1024x256.png";

const alphabets = [
  { letter: "A", id: "#A" },
  { letter: "B", id: "#B" },
  { letter: "C", id: "#C" },
  { letter: "D", id: "#D" },
  { letter: "E", id: "#E" },
  { letter: "F", id: "#F" },
  { letter: "G", id: "#G" },
  { letter: "H", id: "#H" },
  { letter: "I", id: "#I" },
  { letter: "J", id: "#J" },
  { letter: "K", id: "#K" },
  { letter: "L", id: "#L" },
  { letter: "M", id: "#M" },
  { letter: "N", id: "#N" },
  { letter: "O", id: "#O" },
  { letter: "P", id: "#P" },
  { letter: "Q", id: "#Q" },
  { letter: "R", id: "#R" },
  { letter: "S", id: "#S" },
  { letter: "T", id: "#T" },
  { letter: "U", id: "#U" },
  { letter: "V", id: "#V" },
  { letter: "W", id: "#W" },
  { letter: "X", id: "#X" },
  { letter: "Y", id: "#Y" },
  { letter: "Z", id: "#Z" },
];
export function NavBar() {
  return (
    <nav>
      <div className="flex justify-center">
        <img src={Logo} alt="" />
      </div>
      <p className=" text-3xl bg-[#FF7800] p-3  text-white">
        Medical Terminologies
      </p>
      <div className="flex justify-between max-w-screen-md m-auto">
        {alphabets.map((letter, idx) => {
          return (
            <a href={letter.id} key={idx} className="hover:text-[#FF7800]">
              {letter.letter}
            </a>
          );
        })}
      </div>
      <div className="p-2 text-center">
        <a href="#footer">
          <u>Footer</u>
        </a>
      </div>
    </nav>
  );
}
