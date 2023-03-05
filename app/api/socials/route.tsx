import { NextRequest, NextResponse } from "next/server";

export type Social = {
  name: string;
  link: string;
  simple: boolean;
};

export async function GET(params: NextRequest) {
  const { searchParams } = new URL(params.url);
  const isSimple = searchParams.get("isSimple");

  const socials: Social[] = [
    {
      name: "GitHub",
      link: "https://github.com/ricomuh",
      simple: true,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ricomuh/",
      simple: true,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ngoding_seru/",
      simple: true,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ricomuh_/",
      simple: false,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/ricomuh_",
      simple: false,
    },
    {
      name: "Email",
      link: "mailto:rico@leolitgames.com",
      simple: false,
    },
    {
      name: "Whatsapp",
      link: "https://wa.me/6282138947820",
      simple: false,
    },
  ];

  if (isSimple) {
    return NextResponse.json(socials.filter((social) => social.simple));
  } else {
    return NextResponse.json(socials);
  }
}
