import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { Social } from "./api/socials/route";
import { socials as socialAttributes } from "@/lib/getSocialIcon";
import TypingDescription from "@/components/typingDescription";
import DinamicProfilePicture from "@/components/dinamicProfilePicture";

// dinamic photos
import photo1 from "@/assets/img/pp.png";
import photo2 from "@/assets/img/pp2.png";

async function getJobs() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/jobs");
  const data = await res.json();
  return data;
}

async function getSocials() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/socials?isSimple=true",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}

export default async function HeroSection() {
  const jobs: { jobs: string[] } = await getJobs();
  const socials: Social[] = await getSocials();

  return (
    <section className="md:w-10/12 mx-auto md:min-h-screen flex items-center">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center justify-between my-auto w-full">
        <div className="flex flex-col gap-4 before:h-1 before:w-36 before:bg-indigo-500 before:mb-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Hello!
            <br />
            I'm{" "}
            <span className="bg-gradient-to-r from-indigo-500 to bg-yellow-700 bg-clip-text text-transparent drop-shadow-lg">
              Rico Muhammad
            </span>
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-200">
            I'm a <TypingDescription items={jobs.jobs} />
          </p>
          <div className="flex gap-4">
            <a
              href="#portofolio"
              className="px-6 py-3 font-bold text-lg duration-200 text-white bg-gradient-to-tr from-indigo-600 to-indigo-400 hover:from-indigo-700 hover:to-indigo-500 rounded-xl shadow-lg flex gap-2 items-center group"
            >
              <span>Browse Portofolio</span>
              <i className="fas fa-chevron-right group-hover:rotate-90 duration-200"></i>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 font-bold text-lg text-indigo-500 dark:text-white duration-200 hover:text-indigo-600 dark:hover:text-gray-100 rounded-xl shadow-md hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
          <div className="flex gap-4 mt-4" x-data="socials()">
            {socials.map((social) => (
              <a
                href={social.link}
                key={social.name}
                target="_blank"
                className={`${
                  socialAttributes[social.name].className
                } duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center hover:-translate-y-2`}
              >
                {/* {JSON.stringify(socialAttributes[social.name])} */}
                {/* {socialAttributes[social.name] ? "test" : "test2"} */}
                <FontAwesomeIcon
                  icon={socialAttributes[social.name].icon}
                  className={socialAttributes[social.name].color}
                  size="2x"
                />
              </a>
            ))}
          </div>
        </div>
        <div>
          {/*  */}
          <DinamicProfilePicture srcs={[photo1, photo2]} />
        </div>
      </div>
    </section>
  );
}
