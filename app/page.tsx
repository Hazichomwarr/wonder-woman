import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/image/hero.jpeg"
        fill
        alt="festival picture"
        className="object-cover"
      />
    </div>
  );
}
