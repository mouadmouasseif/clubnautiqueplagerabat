import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Activechose() {
const images = {
    hero: "./Image/hero.jpg",
    background: "./Image/background.jpg",
    hero2: "./Image/hero2.jpg",
    kayak: "./Image/kayak.jpg",
    surf: "./Image/surf.jpg",
    bodyboard: "./Image/bodyboard.jpg",
    paddle: "./Image/paddle.jpg",
    sailing: "./Image/Sailing.jpg",
  };
  return (
<section className="py-16 relative w-full bg-cover bg-center text-center bg-gray-100">
<h2 className="text-4xl text-blue-600 font-bold">CHOOSE YOUR ACTIVITE</h2>
<div className="mt-11 flex justify-center gap-9 py-9">
  {["Surf", "Kayak", "Bodyboard", "Paddle", "Sailing"].map((level) => (
    <Card key={level} className="mt-6 w-70 h-90 overflow-hidden relative">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${images[level.toLowerCase() as keyof typeof images]})` }}
      />
      <CardContent className="p-0 relative z-10 flex flex-col justify-between h-full">
        <div className=" text-center text-black">
          <h3 className="text-xl font-semibold bg-white bg-opacity-50 py-2 px-4 inline-block rounded-md">{level}</h3>
        </div>
        <div className="p-4 text-center">
          <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-300"><a href="/activite">RESERVER</a></Button>
        </div>
      </CardContent>
    </Card>
  ))}
</div>
</section>)
}